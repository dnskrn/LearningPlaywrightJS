# Reading and Writing Excel, CSV, JSON, and XML Files in JavaScript

Below are examples of how to read and write Excel, CSV, JSON, and XML files using JavaScript.

## Prerequisites
Install the required npm packages:
```bash
npm install xlsx csv-parser fast-csv fs xml2js
```

## Reading and Writing Excel Files
```javascript
const XLSX = require('xlsx');

// Reading Excel File
const readExcel = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    console.log(data);
};

// Writing Excel File
const writeExcel = (filePath, data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, filePath);
};
```

## Reading and Writing CSV Files
```javascript
const fs = require('fs');
const csvParser = require('csv-parser');
const fastCsv = require('fast-csv');

// Reading CSV File
const readCSV = (filePath) => {
    const results = [];
    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log(results);
        });
};

// Writing CSV File
const writeCSV = (filePath, data) => {
    const ws = fs.createWriteStream(filePath);
    fastCsv.write(data, { headers: true }).pipe(ws);
};
```

## Reading and Writing JSON Files
```javascript
const fs = require('fs');

// Reading JSON File
const readJSON = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(JSON.parse(data));
};

// Writing JSON File
const writeJSON = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
```

## Reading and Writing XML Files
```javascript
const fs = require('fs');
const xml2js = require('xml2js');

// Reading XML File
const readXML = (filePath) => {
    const xmlData = fs.readFileSync(filePath, 'utf8');
    xml2js.parseString(xmlData, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
};

// Writing XML File
const writeXML = (filePath, data) => {
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(data);
    fs.writeFileSync(filePath, xml);
};
```

## Example Usage
```javascript
// Example Data
const jsonData = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];

// File Paths
const excelPath = './data.xlsx';
const csvPath = './data.csv';
const jsonPath = './data.json';
const xmlPath = './data.xml';

// Function Calls
writeExcel(excelPath, jsonData);
readExcel(excelPath);

writeCSV(csvPath, jsonData);
readCSV(csvPath);

writeJSON(jsonPath, jsonData);
readJSON(jsonPath);

writeXML(xmlPath, { people: { person: jsonData } });
readXML(xmlPath);
```

## Notes
- Ensure the file paths are correct and accessible.
- Install the required npm packages before running the code.
