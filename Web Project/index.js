// // WE have attached file system module to this file.
const fs = require('fs');

// // step1:create a file
fs.writeFile("task9.txt", "Hello,this is task9 of sig web", (err) => {
    console.log('Your file has been created.');
});

// // step2: to update data
fs.appendFile('task9.txt', ' and this is the last task of this session.', (err) => {
        console.log('Your data has been updated in file.');
});

// // step3: read a file
fs.readFile('task9.txt', 'UTF-8', (err, data) => {

    console.log(data);
});


//     console.log(data);
// });

// step4: to delete the file


// fs.unlink('task9.txt',()=>{
//     console.log('Your file has been deleted');
// });

// uncomment step4 part and comment the rest to delete the file
