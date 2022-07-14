// enum Shoes {
//     Nike,
//     Adidas,
// }

// var myShoes = Shoes.Nike;
// console.log(myShoes); // 0

enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제
enum Answer {
    YES = 'Y',
    NO = 'N',
}
function askQuestion(answer: Answer) {
    if(answer === Answer.YES) {
        console.log('정답입니다.');
    }
    if(answer === Answer.NO) {
        console.log('오답입니다.');
    }
}
// askQuestion('Yes'); // error
askQuestion(Answer.YES);
