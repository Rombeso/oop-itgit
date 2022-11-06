class Test {
    set testProp(a) {
        this._testProp = a;
    }
    get testProp() {
        return this._testProp;
    }
}

const newTest = new Test();

// newTest.testProp = 555;
// console.log('newTest', newTest);
// console.log(newTest.testProp)