const fs = require('fs');
const pathUtil = require('path');
const prettifyJSON = require('../');


test('simple use', () => {
  const path = pathUtil.join(__dirname, 'fixture.json');
  const o = require(path);
  let txt = fs.readFileSync(path, 'utf-8');
  txt = txt.replace(/"([^"]+)":/g, '$1:');
  const json = prettifyJSON(o);
  expect(json).toBe(txt.trim());
});
