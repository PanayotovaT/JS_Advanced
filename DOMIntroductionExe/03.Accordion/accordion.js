function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const text = document.getElementById('extra');
    console.log(text.children[0]);
    if(button.textContent == 'More') {
        text.style.display = 'block';
        button.textContent = 'Less'
    } else {
        text.style.display = 'none';
        button.textContent = 'More'
    }
}