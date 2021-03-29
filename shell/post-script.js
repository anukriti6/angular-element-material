const fs = require('fs-extra');
const path = require('path');

fs.readdir('./elements', (err, files) => {
    if (err) {
        console.log(err);
    }

    files.forEach(file => {
        const fileDir = path.join('./elements', file);

        if (file !== 'index-element.html') {
           if (fs.statSync(fileDir).isDirectory) {
             fs.rmdirSync(fileDir,{recursive:true});
           } else {
             fs.unlinkSync(fileDir);
           }
        }

    });
});

fs.copy('./dist/shell','./elements',(err)=>{
console.log(err);
})
