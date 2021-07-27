'use strict'

const path = require('path')
const testCase = require('./testCase')

module.exports = function file(testResult, relative) {
  const aFile = [{_attr: {path: relative ? path.relative(process.cwd(), testResult.testFilePath) : testResult.testFilePath}}]
  const testCases = testResult.testResults.map(testCase)

  return {file: aFile.concat(testCases)}
}
