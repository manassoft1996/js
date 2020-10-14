function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
var x = new emp(103, "Vimal Jaiswal", 30000);

console.log(x.id + " " + x.name + " " + x.salary);  