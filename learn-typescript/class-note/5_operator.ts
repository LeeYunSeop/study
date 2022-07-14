// Union Type
var yuns: string | number | boolean;
function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if(typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
// 유니온 타입은 공통된 속성만 접근 가능하도록 되어있고 다른 값을 사용하고 싶다면 타입 가드를 이용해서 접근
// function askSomeone(someone: Developer | Person) {
//     someone.name;
//     // someone.skill;
// }
// askSomeone({ name: '디벨로터', skill: '웹개발' });
// askSomeone({ name: '캡틴', age: 100 });

// & -> 해당 되는 타입을 합친 새로운 타입을 만들게 됨
function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}
askSomeone({ name: '디벨로터', skill: '웹 개발', age: 34 });

var seop: string | number | boolean;
var capti: string & number & boolean;