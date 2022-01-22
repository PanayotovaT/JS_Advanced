function solution() {
   const [gifts, sent, discarded] = document.querySelectorAll('section ul');
   const input = document.querySelector('input');

   document.querySelector('button').addEventListener('click', addGift);

   function addGift() {
    const name = input.value;
    input.value = '';

    const element = e('li', name, 'gift');
    const sendBtn = e('button','Send', 'sendButton');
    const discardBtn = e('button','Discard', 'discardButton');

    element.appendChild(sendBtn);
    element.appendChild(discardBtn);

    sendBtn.addEventListener('click', () => sendGift(name, element));
    discardBtn.addEventListener('click', () => discardGifts(name, element))

    gifts.appendChild(element);

    sortGifts()
   }

   function sendGift(name, a) {
    
    a.remove();
    const element = e('li', name, 'gift');
    sent.appendChild(element);
   }

   function discardGifts(name, el) {
    el.remove();
    const element = e('li', name, 'gift');
    discarded.appendChild(element);
   }

   function sortGifts() {
       console.log(gifts.children.textContent);
    Array
    .from(gifts.children)
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(x => gifts.appendChild(x));
   }

   function e(type, content, className) {
       const result = document.createElement(type);
       result.textContent = content;

       if(className) {
           result.className = className;
       }
       return result;

   }
}