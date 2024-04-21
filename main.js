const tsj = require("ts-json-schema-generator");
const fs = require("fs");

/** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
const config = {
    path: "src/types/types.ts",
    tsconfig: "./tsconfig.json",
    type: "*", // Or <type-name> if you want to generate schema for that one type only
};

const outputPath = "./out.json";

const schema = tsj.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
fs.writeFile(outputPath, schemaString, (err) => {
    if (err) throw err;
});