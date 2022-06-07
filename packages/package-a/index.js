import _ from 'lodash';
function sayHelloA() {
    console.log("A:random ".concat(_.random(0, 5)));
}
export { sayHelloA };
