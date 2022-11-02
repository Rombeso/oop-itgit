class List2 extends List {
constructor(arrString, cssClass ) {
    super(arrString);
    this.cssClass = cssClass;
}

    render() {
    let elementUl = super.render()
        elementUl.classList.add(this.cssClass);
    return elementUl
    }
}

let newList2 = new List2(['one', 'two', 'three', 'four'],'some-class')
console.log(newList2.render())