"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GenerateObjects = exports.GenerateObjectFromPokemon = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var typescript_1 = __importDefault(require("typescript"));
var Pokemon_json_1 = __importDefault(require("../JSON/Pokemon.json"));
function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function convertToPascalCase(input) {
    // Remove spaces and split the string into words
    var words = input.trim().split(/\s+/);
    // Capitalize the first letter of each word and join them
    var pascalCaseString = words
        .map(function (word) {
        return word.length === 0 ? '' : word[0].toUpperCase() + word.slice(1);
    })
        .join('');
    return pascalCaseString;
}
function cleanedName(inputString) {
    // Convert the string to pascal case
    var pascalString = convertToPascalCase(removeDiacritics(inputString));
    // Remove punctuation
    var stringWithoutPunctuation = pascalString.replace(/[^\w\s]/g, '');
    if (stringWithoutPunctuation === '' || inputString.includes('???')) {
        stringWithoutPunctuation = 'Unknown';
    }
    return stringWithoutPunctuation;
}
var generateFormeObjectLiteral = function (forme) {
    var _a, _b;
    return typescript_1["default"].factory.createObjectLiteralExpression([
        typescript_1["default"].factory.createPropertyAssignment('name', typescript_1["default"].factory.createStringLiteral(forme.name)),
        typescript_1["default"].factory.createPropertyAssignment('formeName', typescript_1["default"].factory.createStringLiteral(forme.formeName)),
        typescript_1["default"].factory.createPropertyAssignment('formeNumber', typescript_1["default"].factory.createNumericLiteral(forme.formeNumber)),
        typescript_1["default"].factory.createPropertyAssignment('isBaseForme', forme.isBaseForme ? typescript_1["default"].factory.createTrue() : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('isMega', forme.isMega ? typescript_1["default"].factory.createTrue() : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('isGMax', forme.isGMax ? typescript_1["default"].factory.createTrue() : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('isBattleOnly', forme.isBattleOnly ? typescript_1["default"].factory.createTrue() : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('alias', typescript_1["default"].factory.createStringLiteral(forme.alias)),
        typescript_1["default"].factory.createPropertyAssignment('types', typescript_1["default"].factory.createArrayLiteralExpression(forme.types.map(function (type) { return typescript_1["default"].factory.createStringLiteral(type); }))),
        typescript_1["default"].factory.createPropertyAssignment('genderRatio', typescript_1["default"].factory.createObjectLiteralExpression([
            typescript_1["default"].factory.createPropertyAssignment('male', typescript_1["default"].factory.createNumericLiteral(forme.genderRatio.M)),
            typescript_1["default"].factory.createPropertyAssignment('female', typescript_1["default"].factory.createNumericLiteral(forme.genderRatio.F)),
        ])),
        typescript_1["default"].factory.createPropertyAssignment('baseStats', typescript_1["default"].factory.createObjectLiteralExpression([
            typescript_1["default"].factory.createPropertyAssignment('hp', typescript_1["default"].factory.createNumericLiteral(forme.baseStats.hp)),
            typescript_1["default"].factory.createPropertyAssignment('atk', typescript_1["default"].factory.createNumericLiteral(forme.baseStats.atk)),
            typescript_1["default"].factory.createPropertyAssignment('def', typescript_1["default"].factory.createNumericLiteral(forme.baseStats.def)),
            typescript_1["default"].factory.createPropertyAssignment('spa', typescript_1["default"].factory.createNumericLiteral(forme.baseStats.spa)),
            typescript_1["default"].factory.createPropertyAssignment('spd', typescript_1["default"].factory.createNumericLiteral(forme.baseStats.spd)),
            typescript_1["default"].factory.createPropertyAssignment('spe', typescript_1["default"].factory.createNumericLiteral(forme.baseStats.spe)),
        ])),
        typescript_1["default"].factory.createPropertyAssignment('ability1', typescript_1["default"].factory.createStringLiteral(forme.ability1)),
        typescript_1["default"].factory.createPropertyAssignment('ability2', forme.ability2
            ? typescript_1["default"].factory.createStringLiteral(forme.ability2)
            : typescript_1["default"].factory.createNull()),
        typescript_1["default"].factory.createPropertyAssignment('abilityH', forme.abilityH
            ? typescript_1["default"].factory.createStringLiteral(forme.abilityH)
            : typescript_1["default"].factory.createNull()),
        typescript_1["default"].factory.createPropertyAssignment('height', typescript_1["default"].factory.createNumericLiteral(forme.height)),
        typescript_1["default"].factory.createPropertyAssignment('weight', typescript_1["default"].factory.createNumericLiteral(forme.weight)),
        typescript_1["default"].factory.createPropertyAssignment('evos', typescript_1["default"].factory.createArrayLiteralExpression(((_a = forme.evos) !== null && _a !== void 0 ? _a : []).map(function (evo) {
            return typescript_1["default"].factory.createObjectLiteralExpression([
                typescript_1["default"].factory.createPropertyAssignment('dexNumber', typescript_1["default"].factory.createNumericLiteral(evo.dexNumber)),
                typescript_1["default"].factory.createPropertyAssignment('formeNumber', typescript_1["default"].factory.createNumericLiteral(evo.formeNumber)),
            ]);
        }))),
        typescript_1["default"].factory.createPropertyAssignment('prevo', forme.prevo
            ? typescript_1["default"].factory.createObjectLiteralExpression([
                typescript_1["default"].factory.createPropertyAssignment('dexNumber', typescript_1["default"].factory.createNumericLiteral(forme.prevo.dexNumber)),
                typescript_1["default"].factory.createPropertyAssignment('formeNumber', typescript_1["default"].factory.createNumericLiteral(forme.prevo.formeNumber)),
            ])
            : typescript_1["default"].factory.createNull()),
        typescript_1["default"].factory.createPropertyAssignment('eggGroups', typescript_1["default"].factory.createArrayLiteralExpression(((_b = forme.eggGroups) !== null && _b !== void 0 ? _b : []).map(function (eggGroup) {
            return typescript_1["default"].factory.createStringLiteral(eggGroup);
        }))),
        typescript_1["default"].factory.createPropertyAssignment('gen', typescript_1["default"].factory.createNumericLiteral(forme.gen)),
        typescript_1["default"].factory.createPropertyAssignment('restrictedLegendary', forme.restrictedLegendary
            ? typescript_1["default"].factory.createTrue()
            : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('regional', forme.regional
            ? typescript_1["default"].factory.createStringLiteral(forme.regional)
            : typescript_1["default"].factory.createNull()),
        typescript_1["default"].factory.createPropertyAssignment('subLegendary', forme.subLegendary ? typescript_1["default"].factory.createTrue() : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('mythical', forme.mythical ? typescript_1["default"].factory.createTrue() : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('ultraBeast', forme.ultraBeast ? typescript_1["default"].factory.createTrue() : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('paradox', forme.paradox ? typescript_1["default"].factory.createTrue() : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('cosmeticForme', forme.cosmeticForme ? typescript_1["default"].factory.createTrue() : typescript_1["default"].factory.createFalse()),
        typescript_1["default"].factory.createPropertyAssignment('sprite', typescript_1["default"].factory.createStringLiteral(forme.sprite)),
        typescript_1["default"].factory.createPropertyAssignment('spriteIndex', typescript_1["default"].factory.createArrayLiteralExpression([
            typescript_1["default"].factory.createNumericLiteral(forme.spriteIndex[0]),
            typescript_1["default"].factory.createNumericLiteral(forme.spriteIndex[1]),
        ])),
    ]);
};
var generatePokemonObjectLiteral = function (pokemon) {
    // [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    // ts.factory.createIdentifier(obejctName),
    // ts.
    var objectLiteral = typescript_1["default"].factory.createObjectLiteralExpression([
        typescript_1["default"].factory.createPropertyAssignment('name', typescript_1["default"].factory.createStringLiteral(pokemon.name)),
        typescript_1["default"].factory.createPropertyAssignment('nationalDex', typescript_1["default"].factory.createNumericLiteral(pokemon.nationalDex)),
        typescript_1["default"].factory.createPropertyAssignment('levelUpType', typescript_1["default"].factory.createStringLiteral(pokemon.levelUpType)),
        typescript_1["default"].factory.createPropertyAssignment('formes', typescript_1["default"].factory.createArrayLiteralExpression(pokemon.formes.map(function (forme) { return generateFormeObjectLiteral(forme); }))),
    ]);
    var objectDeclaration = typescript_1["default"].factory.createVariableDeclaration(cleanedName(pokemon.name), undefined, typescript_1["default"].factory.createTypeReferenceNode('Pokemon'), objectLiteral);
    var variableStatement = typescript_1["default"].factory.createVariableStatement(undefined, typescript_1["default"].factory.createVariableDeclarationList([objectDeclaration], typescript_1["default"].NodeFlags.Const));
    return { variableStatement: variableStatement };
};
function generatePokemonTypeImport() {
    return typescript_1["default"].factory.createImportDeclaration(undefined, undefined, typescript_1["default"].factory.createImportClause(false, undefined, typescript_1["default"].factory.createNamedImports([
        typescript_1["default"].factory.createImportSpecifier(undefined, typescript_1["default"].factory.createIdentifier('Pokemon')),
    ])), typescript_1["default"].factory.createStringLiteral('../../types'));
}
function generatePokemonExport(mon) {
    return typescript_1["default"].factory.createExportDeclaration(undefined, undefined, false, typescript_1["default"].factory.createNamedExports([
        typescript_1["default"].factory.createExportSpecifier(undefined, cleanedName(mon)),
    ]), undefined);
}
exports.GenerateObjectFromPokemon = function (mon) {
    var outputFilePath = process.cwd() + "/src/data/gen" + mon.formes[0].gen + "/" + cleanedName(mon.name).toLowerCase() + ".ts";
    var resultFile = typescript_1["default"].createSourceFile(outputFilePath, '', typescript_1["default"].ScriptTarget.Latest, false, typescript_1["default"].ScriptKind.TS);
    var variableStatement = generatePokemonObjectLiteral(mon).variableStatement;
    var printer = typescript_1["default"].createPrinter({ newLine: typescript_1["default"].NewLineKind.LineFeed });
    var importContent = printer.printNode(typescript_1["default"].EmitHint.Unspecified, generatePokemonTypeImport(), resultFile);
    var enumContent = printer.printNode(typescript_1["default"].EmitHint.Unspecified, variableStatement, resultFile);
    var exportContent = printer.printNode(typescript_1["default"].EmitHint.Unspecified, generatePokemonExport(mon.name), resultFile);
    var outputFileContent = "// This file is auto-generated. Do not modify.\n\n" + importContent + "\n\n" + enumContent + "\n\n" + exportContent;
    if (!fs_1["default"].existsSync(path_1.dirname(outputFilePath))) {
        console.log("creating " + path_1.dirname(outputFilePath) + "...");
        fs_1["default"].mkdirSync(path_1.dirname(outputFilePath), { recursive: true });
    }
    // Write the generated content to the output file
    fs_1["default"].writeFileSync(outputFilePath, outputFileContent);
};
function generateGenerationMap(gen, mons) {
    var objectLiteral = typescript_1["default"].factory.createObjectLiteralExpression(mons.map(function (mon) {
        return typescript_1["default"].factory.createPropertyAssignment(mon.nationalDex.toString(), typescript_1["default"].factory.createIdentifier(cleanedName(mon.name)));
    }));
    var objectDeclaration = typescript_1["default"].factory.createVariableDeclaration("Gen" + gen + "PokemonData", undefined, undefined, objectLiteral);
    var variableStatement = typescript_1["default"].factory.createVariableStatement(undefined, typescript_1["default"].factory.createVariableDeclarationList([objectDeclaration], typescript_1["default"].NodeFlags.Const));
    return variableStatement;
}
function generateGenerationIndexFile(gen, mons) {
    var outputFilePath = process.cwd() + "/src/data/gen" + gen + "/index.ts";
    var printer = typescript_1["default"].createPrinter({ newLine: typescript_1["default"].NewLineKind.LineFeed });
    var resultFile = typescript_1["default"].createSourceFile(outputFilePath, '', typescript_1["default"].ScriptTarget.Latest, false, typescript_1["default"].ScriptKind.TS);
    var importStatements = mons.map(function (mon) {
        return typescript_1["default"].factory.createImportDeclaration(undefined, undefined, typescript_1["default"].factory.createImportClause(false, undefined, typescript_1["default"].factory.createNamedImports([
            typescript_1["default"].factory.createImportSpecifier(undefined, typescript_1["default"].factory.createIdentifier(cleanedName(mon.name))),
        ])), typescript_1["default"].factory.createStringLiteral("./" + cleanedName(mon.name).toLowerCase()));
    });
    var importLines = importStatements.map(function (statement) {
        return printer.printNode(typescript_1["default"].EmitHint.Unspecified, statement, resultFile);
    });
    var exportStatements = mons.map(function (mon) {
        return typescript_1["default"].factory.createExportDeclaration(undefined, undefined, false, typescript_1["default"].factory.createNamespaceExport(typescript_1["default"].factory.createIdentifier(cleanedName(mon.name))), typescript_1["default"].factory.createStringLiteral("./" + cleanedName(mon.name).toLowerCase()));
    });
    var exportLines = exportStatements.map(function (statement) {
        return printer.printNode(typescript_1["default"].EmitHint.Unspecified, statement, resultFile);
    });
    var genMonString = printer.printNode(typescript_1["default"].EmitHint.Unspecified, generateGenerationMap(gen, mons), resultFile);
    var genMonExportString = printer.printNode(typescript_1["default"].EmitHint.Unspecified, typescript_1["default"].factory.createExportDeclaration(undefined, undefined, false, typescript_1["default"].factory.createNamedExports([
        typescript_1["default"].factory.createExportSpecifier(undefined, "Gen" + gen + "PokemonData"),
    ]), undefined), resultFile);
    var outputFileContent = "// This file is auto-generated. Do not modify.\n\n" + importLines.join('\n') + "\n\n" + exportLines.join('\n') + "\n\n" + genMonString + "\n\n" + genMonExportString;
    if (!fs_1["default"].existsSync(path_1.dirname(outputFilePath))) {
        console.log("creating " + path_1.dirname(outputFilePath) + "...");
        fs_1["default"].mkdirSync(path_1.dirname(outputFilePath), { recursive: true });
    }
    // Write the generated content to the output file
    fs_1["default"].writeFileSync(outputFilePath, outputFileContent);
}
function GenerateObjects() {
    var currentGen = 1;
    var genMons = [];
    Object.values(Pokemon_json_1["default"]).forEach(function (mon) {
        exports.GenerateObjectFromPokemon(mon);
        if (mon.formes[0].gen && mon.formes[0].gen !== currentGen) {
            generateGenerationIndexFile(currentGen, genMons);
            genMons = [];
            currentGen = mon.formes[0].gen;
        }
        genMons.push(mon);
    });
    generateGenerationIndexFile(currentGen, genMons);
}
exports.GenerateObjects = GenerateObjects;
