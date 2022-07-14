//import  {helloMessage, helloUser} from "./hello.methods";

import *as HelloMethods from "./hello.methods";
//export로 선언된 요소를 사용할 때 (여러 개가 호출됨)
//참조한 요소들은 하나의 객체를 호출하듯 선언 가능
import user, {Person} from "./user";
//export default로 선언된 요소를 사용할때

HelloMethods.helloMessage('World');
HelloMethods.helloUser(user);


console.log(`Number of Person:${Person.numberOfPerson}`);

const{name,age}=user; //비구조화 할당문
console.log(name);
console.log(age);