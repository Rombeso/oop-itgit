class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius = 0) {
        super(width, height, background, value,);
        this.borderRadius = borderRadius
    }
render() {

        let newRender = super.render();
        newRender.style.borderRadius = this.borderRadius + '50px';
        return newRender;
}
}

let buttonEl = new ModernButton(200, 100, 'red', 'Button', 50);

buttonEl.render()
console.log(buttonEl)

