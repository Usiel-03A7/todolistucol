let inputsubm = document.querySelector('.inputsubm');
inputsubm.addEventListener('click',(e)=>{
    let inputTex = document.querySelector('.inputTex');
    let inputCh = document.querySelector ('.todo__input__c');
    e.preventDefault();

    const task = inputTex.value;

    if (!task) {
        alert('De preferencia, rellenar los campos si desea continuar.');
        return;
    }
    
})