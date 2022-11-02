class List3 extends List {
    constructor(arrString, cssClass ) {
        super(arrString);
        this.cssClass = cssClass;
    }

    render() {
        let elementUl = super.render()
        for (let i = 0; i < this.cssClass.length; i++) {
            elementUl.classList.add(this.cssClass[i]);
        }

        return elementUl
    }
}

let newList3 = new List3(['one', 'two', 'three', 'four'],['text-center', 'bold', 'text-red'])
console.log('newList3', newList3)
document.body.appendChild(newList3.render())