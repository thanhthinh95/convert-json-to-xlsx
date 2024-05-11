const fs = require('fs');
const json2xls = require('json2xls');
const JSONbig = require('json-bigint');

// Đường dẫn đến file JSON lớn

const jsonFilePath =  process?.argv?.[2] ||  'input.json';
console.log('Json file path', jsonFilePath);

// Đọc dữ liệu từ file JSON lớn sử dụng json-bigint
const jsonData = JSONbig.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Chuyển đổi dữ liệu JSON sang XLSX
const xls = json2xls(jsonData?.datas);

// Lưu XLSX vào file
const fileName = 'excel-' + new Date().getTime() + '.xlsx'
fs.writeFileSync( fileName, xls, 'binary');

console.log('File ' + fileName + ' successfully');
