let inputsubm = document.querySelector('.inputsubm');
inputsubm.addEventListener('click', (e) => {
    let inputTex = document.querySelector('.inputTex');
    let inputCh = document.querySelector('.todo__input__c');
    e.preventDefault();

    const task = inputTex.value;

    if (!task) {
        alert('De preferencia, rellenar los campos si desea continuar.');
        return;
    }
    const tImputEl = document.createElement('input');
    inputCh.appendChild(tImputEl);
    tImputEl.classList.add('text')
    tImputEl.type = 'text';
    tImputEl.value = task;
    tImputEl.setAttribute('readonly', 'readonly')

    
})