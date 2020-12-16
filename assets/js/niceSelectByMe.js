const setNiceSelect = (niceSelect, realSelect) => {
    // set niceSelectValues
    realSelect.querySelectorAll('option').forEach(el => {
        let value = el.value;
        let isSelected = el.selected;
        if (value) {
            let newLi = document.createElement('li');
            newLi.innerText = value;
            if (isSelected) {
                newLi.classList.add('active');
            }
            niceSelect.appendChild(newLi);
        }
    })
    // niceSelect li Listener
    let lis = niceSelect.querySelectorAll('li');
    lis.forEach(el => {
        el.addEventListener('click', () => {
            for (each of lis) {
                each.classList.remove('active');
            }
            el.classList.add('active');

            let value = el.innerText;
            value = value.toLowerCase();
            realSelect.value = value;
        })
    });
};
// SELECT TEMPLATE !!!!!!!!!!!
// One of the options must have "selected" and "disabled" attributes
// <select>
//     <option selected disabled></option>
//     <option value="s"></option>
//     <option value="m"></option>
//     <option value="l"></option>
//     <option value="xl"></option>
// </select>