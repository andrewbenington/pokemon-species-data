import fs from 'fs'
import { dirname } from 'path'
import ts from 'typescript'

function removeDiacritics(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function convertToPascalCase(input: string): string {
  // Remove spaces and split the string into words
  const words = input.trim().split(/\s+/)

  // Capitalize the first letter of each word and join them
  const pascalCaseString = words
    .map((word) => (word.length === 0 ? '' : word[0].toUpperCase() + word.slice(1)))
    .join('')

  return pascalCaseString
}

function pascalCaseKey(inputString: string) {
  // Convert the string to pascal case
  const pascalString = convertToPascalCase(removeDiacritics(inputString))

  // Remove punctuation
  let stringWithoutPunctuation = pascalString.replace(/[^\w\s]/g, '')

  if (stringWithoutPunctuation === '' || inputString.includes('???')) {
    stringWithoutPunctuation = 'Unknown'
  }

  return { key: stringWithoutPunctuation, str: inputString }
}

const generateEnum = (
  enumName: string,
  values: string[],
  keyAndStringFromLine: (line: string) => { key: string; str: string }
) => {
  const duplicates: { [key: string]: number } = {}
  const enumMembers: ts.EnumMember[] = []
  values.forEach((value) => {
    // eslint-disable-next-line prefer-const
    let { key, str } = keyAndStringFromLine(value)
    if (key in duplicates) {
      duplicates[key]++
      key = `${key}_${duplicates[key]}`
    } else {
      duplicates[key] = 0
    }

    enumMembers.push(ts.factory.createEnumMember(ts.factory.createIdentifier(key)))
  })

  const enumDeclaration = ts.factory.createEnumDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(enumName),
    enumMembers
  )

  return enumDeclaration
}

const generateEnumMax = (enumName: string, maxValue: number) => {
  return ts.factory.createVariableStatement(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          `${enumName}Max`,
          undefined,
          undefined,
          ts.factory.createNumericLiteral(maxValue)
        ),
      ],
      ts.NodeFlags.Const
    )
  )
}

export const generateEnumFromList = (
  enumName: string,
  list: string[],
  codeFile: string,
  getKeyAndStr: ((line: string) => { key: string; str: string }) | undefined
) => {
  const outputFilePath = `${process.cwd()}/src/${codeFile}`
  console.log(`generating ${outputFilePath} from list...`)
  const resultFile = ts.createSourceFile(
    outputFilePath,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  )
  const enumDeclaration = generateEnum(enumName, list, getKeyAndStr ?? pascalCaseKey)
  const maxDeclaration = generateEnumMax(enumName, list.length - 1)

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  const enumContent = printer.printNode(ts.EmitHint.Unspecified, enumDeclaration, resultFile)
  const maxContent = printer.printNode(ts.EmitHint.Unspecified, maxDeclaration, resultFile)

  const outputFileContent = `// This file is auto-generated. Do not modify.\n\n${enumContent}\n\n${maxContent}`

  if (!fs.existsSync(dirname(outputFilePath))) {
    console.log(`creating ${dirname(outputFilePath)}...`)
    fs.mkdirSync(dirname(outputFilePath), { recursive: true })
  }
  // Write the generated content to the output file
  fs.writeFileSync(outputFilePath, outputFileContent)
}
