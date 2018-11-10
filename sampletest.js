var fs = require('fs');
var contents = fs.readFileSync('movies/2018/taarezameenpar.json', {encoding: 'utf8'});


var obj = JSON.parse(contents);
console.log(contents);



/*
var contents2 = fs.readFileSync('movies/2009/3idiots.json', {encoding: 'utf8'});

var obj2 = JSON.parse(contents2);
console.log(contents2);*/
