const username = 'Luis';
let nr: number | string = 12;
let message: string = 'Hello world';
// console.log(message);
let isTeacher = true;

isTeacher = false;

nr = '12';

const students: string[] = ['Hector', 'Frank'];
console.log(students);

interface StudentProps {
  name: string;
  course: string;
  grade: number;
  classes?: string[];
}

const student1: StudentProps = {
  name: 'Luis',
  course: 'Eng Informatica',
  grade: 20
};

function average(n1: number, n2: number): any {
  return (n1 + n2) / 2;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

const user = identity<number>(23);

console.log(average(2, 76));
