// Q124
// define an object with the name property and a method to retrn its name
var obj = {
    name: "sadaf",
    getName: function () {
        return this.name;
    },
};
console.log(obj.getName());
