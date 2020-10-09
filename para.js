function call(a = 88, b = 9999) {
    this.a = 23;
    this.b = 45;
    console.log(this.a + " " + (this.b) / 9);//it will print 23 and 5
}
call(12, 34);