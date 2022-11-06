class Test4 extends Test2 {
    constructor(user) {
        super();
        this.user = user
    }
    set testProp(a) {
        this._testProp = a * 10;
    }

    get testProp() {
        if (this._testProp <= 100) {
            return false
        }
        return this._testProp
    }
}

const test4 = new Test4('werrewr');
console.log(test4.testProp = 20);
console.log(test4.testProp)
console.log(test4)
