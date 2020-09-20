const name = '김사과';
const message = `hello ${name}`;

console.log(message);

const object = { idx: 1 };
const text = `${object}`;

console.log(text);

const func1 = () => true;
const msg = `${func1}`;
console.log(msg);

const red = '빨강';
const blue = '파랑';

function selColors(texts, ...values) {
    return texts.reduce((result, text, i) =>
        `${result}${text}${values[i] ? `<b>${values[i]}</b> ` : ''}`, '');
}

console.log(selColors`선택한 색상은 ${red}과 ${blue}입니다.`);

function sample(texts, ...fns) {
    const mockProps = {
        title: '안녕하세요',
        body: '반가워요 ~~',ㅠ 
    }
}