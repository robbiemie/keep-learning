var name = '123'
var obj = {
    name: "456",
    getName: function() {
        function printName() {
            console.log(this.name) // this->window:123
        }
        printName()
    }
}

obj.getName()