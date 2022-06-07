import { sayHelloB } from "package-b";
function sayHelloC() {
    sayHelloB();
    console.log('C');
}
sayHelloC();
export { sayHelloC };
