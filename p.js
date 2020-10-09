function display(a, b = 6, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    console.log(this.a + " " + this.b + " " + this.c);//11,33,55
}
display(11, 33, 55);
display(11, 55);//inthis case c value is undefind //11 55 undefind
display(77);//77 6 undefined 
display();//undefined 6 undefined