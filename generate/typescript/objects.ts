import fs from 'fs'
import { dirname } from 'path'
import ts from 'typescript'
import PokemonData from '../JSON/Pokemon.json'
import Forme from './types/forme'
import Pokemon from './types/pokemon'

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

function cleanedName(inputString: string) {
  // Convert the string to pascal case
  const pascalString = convertToPascalCase(removeDiacritics(inputString))

  // Remove punctuation
  let stringWithoutPunctuation = pascalString.replace(/[^\w\s]/g, '')

  if (stringWithoutPunctuation === '' || inputString.includes('???')) {
    stringWithoutPunctuation = 'Unknown'
  }

  return stringWithoutPunctuation
}

const generateFormeObjectLiteral = (forme: Forme) => {
  return ts.factory.createObjectLiteralExpression([
    ts.factory.createPropertyAssignment('name', ts.factory.createStringLiteral(forme.name)),
    ts.factory.createPropertyAssignment(
      'formeName',
      ts.factory.createStringLiteral(forme.formeName)
    ),
    ts.factory.createPropertyAssignment(
      'formeNumber',
      ts.factory.createNumericLiteral(forme.formeNumber)
    ),
    ts.factory.createPropertyAssignment(
      'isBaseForme',
      forme.isBaseForme ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment(
      'isMega',
      forme.isMega ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment(
      'isGMax',
      forme.isGMax ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment(
      'isBattleOnly',
      forme.isBattleOnly ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment('alias', ts.factory.createStringLiteral(forme.alias)),
    ts.factory.createPropertyAssignment(
      'types',
      ts.factory.createArrayLiteralExpression(
        forme.types.map((type) => ts.factory.createStringLiteral(type))
      )
    ),
    ts.factory.createPropertyAssignment(
      'genderRatio',
      ts.factory.createObjectLiteralExpression([
        ts.factory.createPropertyAssignment(
          'male',
          ts.factory.createNumericLiteral(forme.genderRatio.M)
        ),
        ts.factory.createPropertyAssignment(
          'female',
          ts.factory.createNumericLiteral(forme.genderRatio.F)
        ),
      ])
    ),
    ts.factory.createPropertyAssignment(
      'baseStats',
      ts.factory.createObjectLiteralExpression([
        ts.factory.createPropertyAssignment(
          'hp',
          ts.factory.createNumericLiteral(forme.baseStats.hp)
        ),
        ts.factory.createPropertyAssignment(
          'atk',
          ts.factory.createNumericLiteral(forme.baseStats.atk)
        ),
        ts.factory.createPropertyAssignment(
          'def',
          ts.factory.createNumericLiteral(forme.baseStats.def)
        ),
        ts.factory.createPropertyAssignment(
          'spa',
          ts.factory.createNumericLiteral(forme.baseStats.spa)
        ),
        ts.factory.createPropertyAssignment(
          'spd',
          ts.factory.createNumericLiteral(forme.baseStats.spd)
        ),
        ts.factory.createPropertyAssignment(
          'spe',
          ts.factory.createNumericLiteral(forme.baseStats.spe)
        ),
      ])
    ),
    ts.factory.createPropertyAssignment('ability1', ts.factory.createStringLiteral(forme.ability1)),
    ts.factory.createPropertyAssignment(
      'ability2',
      forme.ability2 ? ts.factory.createStringLiteral(forme.ability2) : ts.factory.createNull()
    ),
    ts.factory.createPropertyAssignment(
      'abilityH',
      forme.abilityH ? ts.factory.createStringLiteral(forme.abilityH) : ts.factory.createNull()
    ),
    ts.factory.createPropertyAssignment('height', ts.factory.createNumericLiteral(forme.height)),
    ts.factory.createPropertyAssignment('weight', ts.factory.createNumericLiteral(forme.weight)),
    ts.factory.createPropertyAssignment(
      'evos',
      ts.factory.createArrayLiteralExpression(
        (forme.evos ?? []).map((evo) =>
          ts.factory.createObjectLiteralExpression([
            ts.factory.createPropertyAssignment(
              'dexNumber',
              ts.factory.createNumericLiteral(evo.dexNumber)
            ),
            ts.factory.createPropertyAssignment(
              'formeNumber',
              ts.factory.createNumericLiteral(evo.formeNumber)
            ),
          ])
        )
      )
    ),
    ts.factory.createPropertyAssignment(
      'prevo',
      forme.prevo
        ? ts.factory.createObjectLiteralExpression([
            ts.factory.createPropertyAssignment(
              'dexNumber',
              ts.factory.createNumericLiteral(forme.prevo.dexNumber)
            ),
            ts.factory.createPropertyAssignment(
              'formeNumber',
              ts.factory.createNumericLiteral(forme.prevo.formeNumber)
            ),
          ])
        : ts.factory.createNull()
    ),
    ts.factory.createPropertyAssignment(
      'eggGroups',
      ts.factory.createArrayLiteralExpression(
        (forme.eggGroups ?? []).map((eggGroup) => ts.factory.createStringLiteral(eggGroup))
      )
    ),
    ts.factory.createPropertyAssignment('gen', ts.factory.createNumericLiteral(forme.gen)),
    ts.factory.createPropertyAssignment(
      'restrictedLegendary',
      forme.restrictedLegendary ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment(
      'regional',
      forme.regional ? ts.factory.createStringLiteral(forme.regional) : ts.factory.createNull()
    ),
    ts.factory.createPropertyAssignment(
      'subLegendary',
      forme.subLegendary ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment(
      'mythical',
      forme.mythical ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment(
      'ultraBeast',
      forme.ultraBeast ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment(
      'paradox',
      forme.paradox ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment(
      'cosmeticForme',
      forme.cosmeticForme ? ts.factory.createTrue() : ts.factory.createFalse()
    ),
    ts.factory.createPropertyAssignment('sprite', ts.factory.createStringLiteral(forme.sprite)),
    ts.factory.createPropertyAssignment(
      'spriteIndex',
      ts.factory.createArrayLiteralExpression([
        ts.factory.createNumericLiteral(forme.spriteIndex[0]),
        ts.factory.createNumericLiteral(forme.spriteIndex[1]),
      ])
    ),
  ])
}

const generatePokemonObjectLiteral = (pokemon: Pokemon) => {
  // [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
  // ts.factory.createIdentifier(obejctName),
  // ts.
  const objectLiteral = ts.factory.createObjectLiteralExpression([
    ts.factory.createPropertyAssignment('name', ts.factory.createStringLiteral(pokemon.name)),
    ts.factory.createPropertyAssignment(
      'nationalDex',
      ts.factory.createNumericLiteral(pokemon.nationalDex)
    ),
    ts.factory.createPropertyAssignment(
      'levelUpType',
      ts.factory.createStringLiteral(pokemon.levelUpType)
    ),
    ts.factory.createPropertyAssignment(
      'formes',
      ts.factory.createArrayLiteralExpression(
        pokemon.formes.map((forme) => generateFormeObjectLiteral(forme))
      )
    ),
  ])

  const objectDeclaration = ts.factory.createVariableDeclaration(
    cleanedName(pokemon.name),
    undefined,
    ts.factory.createTypeReferenceNode('Pokemon'),
    objectLiteral
  )

  const variableStatement = ts.factory.createVariableStatement(
    undefined,
    ts.factory.createVariableDeclarationList([objectDeclaration], ts.NodeFlags.Const)
  )

  return { variableStatement }
}

function generatePokemonTypeImport() {
  return ts.factory.createImportDeclaration(
    undefined,
    undefined,
    ts.factory.createImportClause(
      false,
      undefined,
      ts.factory.createNamedImports([
        ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier('Pokemon')),
      ])
    ),
    ts.factory.createStringLiteral('../../types')
  )
}

function generatePokemonExport(mon: string) {
  return ts.factory.createExportDeclaration(
    undefined,
    undefined,
    false,
    ts.factory.createNamedExports([
      ts.factory.createExportSpecifier(false, undefined, cleanedName(mon)),
    ]),
    undefined
  )
}

export const GenerateObjectFromPokemon = (mon: Pokemon) => {
  const outputFilePath = `${process.cwd()}/src/data/gen${mon.formes[0].gen}/${cleanedName(
    mon.name
  ).toLowerCase()}.ts`
  const resultFile = ts.createSourceFile(
    outputFilePath,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  )
  const { variableStatement } = generatePokemonObjectLiteral(mon)

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

  const importContent = printer.printNode(
    ts.EmitHint.Unspecified,
    generatePokemonTypeImport(),
    resultFile
  )
  const enumContent = printer.printNode(ts.EmitHint.Unspecified, variableStatement, resultFile)
  const exportContent = printer.printNode(
    ts.EmitHint.Unspecified,
    generatePokemonExport(mon.name),
    resultFile
  )

  const outputFileContent = `// This file is auto-generated. Do not modify.\n\n${importContent}\n\n${enumContent}\n\n${exportContent}`

  if (!fs.existsSync(dirname(outputFilePath))) {
    console.log(`creating ${dirname(outputFilePath)}...`)
    fs.mkdirSync(dirname(outputFilePath), { recursive: true })
  }
  // Write the generated content to the output file
  fs.writeFileSync(outputFilePath, outputFileContent)
}

function generateGenerationMap(gen: number, mons: Pokemon[]) {
  const objectLiteral = ts.factory.createObjectLiteralExpression(
    mons.map((mon) =>
      ts.factory.createPropertyAssignment(
        mon.nationalDex.toString(),
        ts.factory.createIdentifier(cleanedName(mon.name))
      )
    )
  )

  const objectDeclaration = ts.factory.createVariableDeclaration(
    `Gen${gen}PokemonData`,
    undefined,
    undefined,
    objectLiteral
  )

  const variableStatement = ts.factory.createVariableStatement(
    undefined,
    ts.factory.createVariableDeclarationList([objectDeclaration], ts.NodeFlags.Const)
  )

  return variableStatement
}

function generateGenerationIndexFile(gen: number, mons: Pokemon[]) {
  const outputFilePath = `${process.cwd()}/src/data/gen${gen}/index.ts`
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  const resultFile = ts.createSourceFile(
    outputFilePath,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  )

  const importStatements = mons.map((mon) =>
    ts.factory.createImportDeclaration(
      undefined,
      undefined,
      ts.factory.createImportClause(
        false,
        undefined,
        ts.factory.createNamedImports([
          ts.factory.createImportSpecifier(
            false,
            undefined,
            ts.factory.createIdentifier(cleanedName(mon.name))
          ),
        ])
      ),
      ts.factory.createStringLiteral(`./${cleanedName(mon.name).toLowerCase()}`)
    )
  )

  const importLines = importStatements.map((statement) =>
    printer.printNode(ts.EmitHint.Unspecified, statement, resultFile)
  )

  const exportStatements = mons.map((mon) =>
    ts.factory.createExportDeclaration(
      undefined,
      undefined,
      false,
      ts.factory.createNamespaceExport(ts.factory.createIdentifier(cleanedName(mon.name))),
      ts.factory.createStringLiteral(`./${cleanedName(mon.name).toLowerCase()}`)
    )
  )
  const exportLines = exportStatements.map((statement) =>
    printer.printNode(ts.EmitHint.Unspecified, statement, resultFile)
  )

  const genMonString = printer.printNode(
    ts.EmitHint.Unspecified,
    generateGenerationMap(gen, mons),
    resultFile
  )

  const genMonExportString = printer.printNode(
    ts.EmitHint.Unspecified,
    ts.factory.createExportDeclaration(
      undefined,
      undefined,
      false,
      ts.factory.createNamedExports([
        ts.factory.createExportSpecifier(false, undefined, `Gen${gen}PokemonData`),
      ]),
      undefined
    ),
    resultFile
  )

  const outputFileContent = `// This file is auto-generated. Do not modify.\n\n${importLines.join(
    '\n'
  )}\n\n${exportLines.join('\n')}\n\n${genMonString}\n\n${genMonExportString}`

  if (!fs.existsSync(dirname(outputFilePath))) {
    console.log(`creating ${dirname(outputFilePath)}...`)
    fs.mkdirSync(dirname(outputFilePath), { recursive: true })
  }
  // Write the generated content to the output file
  fs.writeFileSync(outputFilePath, outputFileContent)
}

export function GenerateObjects() {
  let currentGen = 1
  let genMons: Pokemon[] = []
  Object.values(PokemonData).forEach((mon) => {
    console.log(mon.name)
    GenerateObjectFromPokemon(mon as unknown as Pokemon)
    if (mon.formes[0].gen && mon.formes[0].gen !== currentGen) {
      generateGenerationIndexFile(currentGen, genMons)
      genMons = []
      currentGen = mon.formes[0].gen
    }
    genMons.push(mon as unknown as Pokemon)
  })
  generateGenerationIndexFile(currentGen, genMons)
}
