const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.promises
      .readFile(path, 'utf-8')
      .then((data) => {
        const students = data.split('\n');
        students.pop();
        students.shift();

        resolve(students.length);
      })
      .catch(() => reject(new Error('Error: Cannot load the database')));
  });
}

module.exports = countStudents;
