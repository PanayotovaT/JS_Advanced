function solve() {
    const sectionArray = Array.from(document.getElementsByTagName('section'));
    console.log(sectionArray);
    const task = document.getElementById('task');
    const textarea = document.getElementById('description');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', onClick);

    function onClick(ev) {
        ev.preventDefault()
        const taskInput = task.value;
        const textareaInput = textarea.value;
        const dateInput = date.value;
        if (taskInput == '' || textareaInput == '' || dateInput == '') {
            return;
        } else {
            task.value = '';
            textarea.value = '';
            date.value = '';
            let article = e('article');
            let h3 = e('h3', taskInput);
            let p1 = e('p', `Description: ${textareaInput}`);
            let p2 = e('p', `Due Date: ${dateInput}`);
            let div = e('div');
            div.className = 'flex';

            let startBtn = e('button', 'Start', 'green');
            startBtn.id = 'startButton'
            let delBtn = e('button', 'Delete', 'red');
            delBtn.id = 'delButton';
            div.appendChild(startBtn);
            div.appendChild(delBtn);
            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(div);

            let open = Array.from(sectionArray[1].children)[1];
            open.appendChild(article);
        }
        function e(type, content, className) {
            let el = document.createElement(type);
            el.textContent = content;
    
            if (className) {
                el.className = className;
            }
            return el;
        }
      

    }
    const secondSection = sectionArray[1];
    secondSection.addEventListener('click', action);
    function action(e) {
        if (e.target.tagName !== 'BUTTON') {
            return;
        } else {
           const target = e.target;
           if(target.textContent === 'Start') {
               const article = target.parentNode.parentNode;
               let newArticle = e('article');
               let h3Value = article.children[0].textContent;
               let h3 = e('h3', h3Value);
               let p1Value = article.children[1].textContent;
               let p1 = e('p', p1Value);
               let p2Value = article.children[2].textContent;
               let p2 = e('p', p2Value);
               let div = e('div');
               div.className = 'flex';
               let delButton = e('button', 'Delete', 'red');
               let finishButton = e('button', 'Finish', 'orange');
               div.appendChild(delButton);
               div.appendChild(finishButton);
               newArticle.appendChild(h3);
               newArticle.appendChild(p1);
               newArticle.appendChild(p2);
               newArticle.appendChild(div);

               let inProgress = Array.from(sectionArray[2].children)[1];
               article.remove();
               inProgress.appendChild(newArticle);


               function e(type, content, className) {
                let el = document.createElement(type);
                el.textContent = content;
        
                if (className) {
                    el.className = className;
                }
                return el;
            }
           

           } else if(target.textContent === 'Delete') {
               target.parentNode.parentNode.remove();
           }
        }

    }
    const thirdSection = sectionArray[2];
    thirdSection.addEventListener('click', complete);
    function complete(ev) {
       
        if(ev.target.tagName !== 'BUTTON') {
            return;
        } else{
            const target = ev.target;
            if(target.textContent === 'Delete') {
                target.parentNode.parentNode.remove();
            } else if(target.textContent === 'Finish') {
                let newArticle = e('article');
                let article = target.parentNode.parentNode;
             let h3Value = article.children[0].textContent;
               let h3 = e('h3', h3Value);
               let p1Value = article.children[1].textContent;
               let p1 = e('p', p1Value);
               let p2Value = article.children[2].textContent;
               let p2 = e('p', p2Value);
               newArticle.appendChild(h3);
               newArticle.appendChild(p1);
               newArticle.appendChild(p2);

               article.remove();
               let fourthSection = sectionArray[3].children[1];
               fourthSection.appendChild(newArticle);
                
            }
        }
        function e(type, content, className) {
            let el = document.createElement(type);
            el.textContent = content;
    
            if (className) {
                el.className = className;
            }
            return el;
        }
    }

 



}