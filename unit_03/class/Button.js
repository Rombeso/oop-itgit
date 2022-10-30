class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }

    render() {
        let divEl = document.querySelector('body')
        let element = document.createElement('button');
        element.style.width = this.width + 'px';
        element.style.height = this.height + 'px';
        element.style.background = this.background;
        element.textContent = this.value;

        return divEl.appendChild(element);
    }
}

let buttonEl0 = new Button(200, 100, 'red', 'Button', 50);
console.log(buttonEl0)