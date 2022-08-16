//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'src/assets');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    let jsonFile = [];
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (fileParent) {
        if(fileParent.indexOf('.') == -1){
            const childPath = path.join(__dirname, 'src/assets/' + fileParent);
            fs.readdir(childPath, function(err, fsChild) {
                // console.log('<---------' + fileParent + '--------->');
                let section = {
                    name: fileParent,
                    images: []
                };
                fsChild.forEach(function(fileChild) {
                    // console.log(fileChild);
                    section.images = section.images.concat(fileChild);
                })
                jsonFile = jsonFile.concat(section);
                console.log(section);
            })
        }
    });
    jsonFile = JSON.stringify(jsonFile)
    console.log(jsonFile);
});