class List {
    constructor(arrString) {
        this.arrString = arrString;
    }
    render() {
        let divEl = document.querySelector('body');
        let elementUl = document.createElement('ul');
        for (let i = 0; i < this.arrString.length; i++) {
            let elementLi = document.createElement('li');
            elementLi.textContent = this.arrString[i];
            elementUl.appendChild(elementLi);
        }
        return elementUl
    }
}

let newList = new List( ['one', 'two', 'three', 'four']);
console.log(newList)
console.log(newList.render())
