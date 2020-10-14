function display(id, name) {
    this.id = id;
    this.name = name;
}
function show(id, name) {
    display.call(this, id, name);
}
function view(id, name) {
    display.call(this, id, name);
}
var x = new show(12, "manas");
var y = new view(100, "jasa");
console.log(x.id + " " + x.name);//12 manas
console.log(y.id + " " + y.name);//100 jasa