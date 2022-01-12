function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newItemText');

    let removeLi = document.querySelector('ul>li');
    removeLi.parentNode.removeChild(removeLi);
    console.log(removeLi);

    const li = document.createElement('li');
    li.textContent = input.value;
    items.appendChild(li);

    const button = document.createElement('button');
    button.classList.add("del")
    button.textContent = 'Del';
    [...items.children].forEach(l => l.appendChild(button));
    button.addEventListener('click', onclick);
    function onclick() {
        let el = button.parentElement;
        el.parentNode.removeChild(el);
    }

}