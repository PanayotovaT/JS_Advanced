

class Modal {
    constructor(m) {
        this.m = m;
        this.el = this._intialize();
    }
    _intialize() {
        const container = e('div', e('p', this.m), button('OK', this.onclose.bind(this)));
        container.classList.add('modal');
        return container;
    }

    onclose() {
        this.el.remove();
    }

    render(parent) {
        parent.appendChild(this.el);
    }
}

document.getElementById('create-btn').addEventListener('click', () => {
    const main = document.querySelector('main');

    const myModal = new Modal('It works');
    // main.appendChild(myModal.el)
    myModal.render(main);
});
function button(label, callback) {
    const element = e('button', label);
    element.addEventListener('click', callback);
    return element;
}
function e(type,...content) {
    const result = document.createElement(type);
    content.forEach(e => {
        if(typeof e == 'string') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else{
            result.appendChild(e);
        }
    });
    return result;
}