interface IPerson {
    name: string;
    age: number;
}

type TPerson = {
    name: string;
    age: number;
}

var yun: TPerson = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id:  string; title: string; done: boolean };
function getTodo(todo: Todo) {

}