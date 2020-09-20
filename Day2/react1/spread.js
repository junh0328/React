const dog = {
    name: '루시'
};

const cuteDog = {
    ...dog,
    face: 'cute'
};

const whiteCuteDog = {
    ...cuteDog,
    color: 'white'
};

console.log(dog);
console.log(cuteDog);
console.log(whiteCuteDog);

const student = ['김사과', '오렌지', '반하나'];
const allStudent = [...student, '이메론', '박수박'];
console.log(student);
console.log(allStudent);


