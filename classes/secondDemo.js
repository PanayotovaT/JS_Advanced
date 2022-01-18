class MyClass {
    constructor() {
        this.name ='Static class';
    }
    static myStaticMethod() {
        console.log('from myStatic method', this); //this в статичние метод вижда другите статични методи закачени за класа
    }
}
MyClass.myStaticMethod();
const myInstance = new MyClass();
console.log(myInstance);
// myInstance.myStaticMethod() хвърля грешка понеже е закачен за класа, а не за инстанзията. Няма достъп до инстанцията.

MyClass.staticName = 'John';
MyClass.myStaticMethod();