export interface IPerson{
    //객체의 타입을 정의할 수 있게 하는 interface IPerson을 생성
    // name:string;
    // age:number;
    // etc?:boolean; //선택 속성
    sayName():void; //함수의 return 타입
    sayAge():void;
}

export class Person implements IPerson{
    static numberOfPerson: number =0;
    // name:string;
    // age:number; //constructor에서 바로 생성자의 타입을 지정해줄 수 있음
    constructor(public name:string,public age:number)  {//타입 주석
        Person.numberOfPerson ++;
        this.name=name;
        this.age=age;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
    sayAge() {
        console.log(`My age is ${this.age}`);
    }
}
const user: Person=new Person('Jinuk',24);
//var -> const 로 변경하기
//var는 사용하지 말것

export default user;
//외부로 내보내는 실습 과정