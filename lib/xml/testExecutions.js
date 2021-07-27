'use strict'

const file = require('./file')

module.exports = function testExecutions(data, formatForSonar56, relativePath) {
  const aTestExecution = [{_attr: {version: '1'}}]
  const testResults = data.testResults.map(t => file(t, relativePath))

  return formatForSonar56
    ? { unitTest: aTestExecution.concat(testResults) }
    : { testExecutions: aTestExecution.concat(testResults) };
};
