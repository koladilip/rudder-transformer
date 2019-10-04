const fs = require("fs");
const path = require("path");
const amplitudeTransformer = require("../v0/am/transform");
// const { compareJSON } = require("./util");

test("Amplitude Tests", () => {
  const inputDataFile = fs.readFileSync(
    path.resolve(__dirname, "./data/am_input.json")
  );
  const outputDataFile = fs.readFileSync(
    path.resolve(__dirname, "./data/am_output.json")
  );
  const inputData = JSON.parse(inputDataFile);
  const expectedData = JSON.parse(outputDataFile);
  const output = amplitudeTransformer.process(inputData);
  expect(output).toEqual(expectedData);
});
