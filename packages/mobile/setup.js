import { unlinkSync, writeFileSync } from 'fs';
import { join } from 'path';
import jestConfig from './jest.json';
import packageJson, { jest, scripts } from './package.json';

const deleteFile = fileName => unlinkSync(join(__dirname, fileName));
const writeFile = (fileName, data) =>
  writeFileSync(join(__dirname, fileName), data);

console.log('🔄 Setting up...');

scripts.tsc = 'tsc';
jest = Object.assign(jest, jestConfig);

writeFile('package.json', JSON.stringify(packageJson, null, 2));

deleteFile('.flowconfig');
deleteFile('App.js');
deleteFile('__tests__/App.js');
deleteFile('jest.json');
deleteFile('LICENSE');
deleteFile('README.md');
deleteFile('setup.js');

console.log(`✅ Setup completed!`);
