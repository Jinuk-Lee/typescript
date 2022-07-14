import {Person} from "./user";

export function helloMessage (message:string):void{
    //console.log('Hello',message);
    console.log(`Hello ${message}`); //템플릿 문자열
}
//최근에 나온 언어들은 타입을 뒤에서 선언해줌
export function helloUser(user :Person):void{
    //console.log("User's name:",user.name);
    //console.log("User's age:",user.age);
    //console.log(`User's name: ${user.name}`); //템플릿 문자열
    //console.log(`User's age: ${user.age}`); //템플릿 문자열
    user.sayAge();
    user.sayName();
}
//외부로 내보내는 실습 과정