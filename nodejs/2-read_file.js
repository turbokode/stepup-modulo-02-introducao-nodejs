const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const dataArray = data.split('\n');
    dataArray.pop();
    dataArray.shift();

    console.log(`Number of students: ${dataArray.length}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
