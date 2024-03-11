const fs = require('fs');

let newdata1 = " Hello My name is Chetan patil \n currently pursuing MCA At K.K. Wagh College Of Engineering,Nashik. \n";


fs.writeFile('data.txt', newdata1, 'utf8', (err) => {
    if (err) {
    console.error('Error writing to output file:', err);
    return;
    }
    console.log('Successfully File Created !');
    });



fs.readFile('data.txt', 'utf8', (err, data) => {
if (err) {
console.error('Error reading input file:', err);
return;
}
let date = new Date().toLocaleString();
let currdate = `Updated Date & Time : ${date}`;
console.log(date);
data = data + `\n\n\n ${currdate}`;
newdata= data.toUpperCase();
fs.writeFile('data2.txt', newdata, 'utf8', (err) => {
if (err) {
console.error('Error writing to output file:', err);
return;
}
console.log('Successfully transferred data from input file to output file!');
});
});
