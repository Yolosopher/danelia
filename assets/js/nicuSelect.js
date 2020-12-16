const nicuSelecto = (niceSelect, realSelect) => {
    // set niceSelectValues
    let valTextPairs = [];

    realSelect.querySelectorAll('option').forEach(el => {
        // console.log(`attribute disabled-is qona: ${!el.getAttribute('disabled') == true}`);
        if (!el.getAttribute('disabled') == true) {
            let inVal = String(el.value);
            let inText = String(el.innerHTML);
            if (el.value) {
                let pair = {
                    txt: inText,
                    val: inVal
                };
                valTextPairs = [...valTextPairs, pair]
            }
            if (el == realSelect.querySelectorAll('option')[0]) {       
                el.classList.add('active')
                realSelect.parentElement.querySelector('p').innerText = el.innerText;
                realSelect.parentElement.querySelector('p').classList.add('active-p');
            }
    
            let value = el.innerHTML;
            if (el.value) {
                let newLi = document.createElement('li');
                newLi.innerHTML = value;
                niceSelect.appendChild(newLi);
            }
        } else {
            realSelect.parentElement.querySelector('p').innerText = el.value;
            realSelect.parentElement.querySelector('p').classList.add('active-p');
        }
    })

    // console.log(valTextPairs);

    // niceSelect li Listener
    let lis = niceSelect.querySelectorAll('li');
    lis.forEach(el => {
        el.addEventListener('click', () => {
            for (each of lis) {
                each.classList.remove('active');
            }
            el.classList.add('active');

            let value = el.innerHTML;
            filteredOption = valTextPairs.filter(filel => filel.txt === value);
            // console.log(filteredOption[0].val);
            // value = value.toLowerCase();
            realSelect.value = filteredOption[0].val;

            $(`option[value="${filteredOption[0].val}"]`).parent().find('option').removeClass('active');
            $(`option[value="${filteredOption[0].val}"]`).addClass('active');
            

            $(realSelect).parent().find('p').addClass('active-p');
            $(realSelect).parent().find('.input-div-logo svg')[0].style.fill = "rgb(23, 23, 23)";
            $(realSelect).parent().find('p').text(filteredOption[0].txt);

            $(realSelect).parent().removeClass('err');
            $(realSelect).parent().find('.input-error-message').removeClass('active');
            deliveryPriceUpdater();
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

