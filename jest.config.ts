const {pathsToModuleNameMapper} = require('ts-jest');
const {compilerOptions} = require('./tsconfig.json');
const nycConfig = require('./.nycrc.json');

module.exports = {
  coverageProvider: 'babel',
  collectCoverageFrom: nycConfig.include,
  coveragePathIgnorePatterns: nycConfig.exclude,
  coverageReporters: nycConfig.reporter,
  coverageDirectory: 'coverage/jest',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/**/*.specs.ts'],
  testEnvironment: 'node',
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'})
};
