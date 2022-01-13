function attachEventsListeners() {

    const dayInput =document.getElementById('days');
    const hourInput =document.getElementById('hours');
    const minutesInput =document.getElementById('minutes');
    const secondsInput =document.getElementById('seconds');
    const main = document.getElementsByTagName('main')[0];
    main.addEventListener('click', onClick);

    function onClick(e) {
        
        // console.log(e.target);
        // console.log(e.currentTarget);
        if(e.target.parentNode.tagName !== 'DIV' || e.target.tagName ==="LABEL") {
            return;
        }

        let btnID = e.target.attributes.id;
        let getBtn = document.getElementById('btnID');
        if(e.target.parentNode.children[1].value == '') {
            return;
        }
        console.log(e.target);
        // let value = 
        // if(e.target.parentNode.children[1] == '') {
        //     return;
        // }
        
        // if(getButton.parentNode.children[1] == null) {
        //     return;
        // }
       
       
    
    }
}