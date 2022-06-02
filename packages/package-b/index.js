import { sayHelloA } from 'package-a';
function sayHelloB() {
    sayHelloA();
    console.log('B');
}
export { sayHelloB };
