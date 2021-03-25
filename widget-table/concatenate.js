const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/widget-table/runtime.js',
'./dist/widget-table/polyfills.js',

'./dist/widget-table/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/my-table.js');
await fs.copyFile('./dist/widget-table/styles.css', 'elements/styles.css')
//await fs.copy('./dist/widget-table/assets/', 'elements/assets/' )
})()
