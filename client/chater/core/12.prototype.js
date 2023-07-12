/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 공통능력은 애니멀에
// 나머지능력은 객체에

/* const animal = {
    legs: 4,
    tail: true,
    stomach: [], //먹은음식 쌓이는곳
    set eat(food) {
        this.stomach.psuh(food);
      },
      get eat() {
          return this.stomach;
        },
      };
      
      const tiger = {
          pattern: '호랑이무늬',
          prey: '',
          hunt(target) {
              this.prey = target;
              return `${target}에게 조용히 접근한다.`;
            },
          };
          
          tiger.__proto__ = animal; */

/* function User (name,age,email) {
  this.name = name;
  this.age = age;
  this.email = email
}

function button(){

}


// const a = button()

const person1 = new User('선범',32,'tiger@naver.com'); */

// 생성자 함수
function Animal() {
  this.stomach = [];
  this.legs = 4;
  (this.tail = true),
    (this.eat = function (food) {
      this.stomach.push(food);
    });
  this.printEat = function (food) {
    return this.stomach;
  };
}

const tiger = new Animal();

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target) {
  (this.prey = target), console.log(`${target}에게 슬금슬금 접근합니다.`);
};
