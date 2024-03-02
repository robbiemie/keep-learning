/**
 * 头条
 */
var length = 10;
function fn() {
console.log(this.length)
};
var obj = {
length: 5,
method: function (fn) {
    fn();
    arguments[0]();
    fn.call(obj, 12);
}
};
obj.method(fn, 1);