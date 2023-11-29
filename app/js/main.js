const urlTelegram = 'https://api.telegram.org/bot6740382641:AAELP8DOXrfcOSGaMLEEvJ6vYwwE8KMsneU/sendMessage?chat_id=-1001773121802&text='
const regex = new RegExp('^((8|\\+7)[\\- ]?)?(\\(?\\d{3,4}\\)?[\\- ]?)?[\\d\\- ]{5,10}$');

let form_calc = document.querySelector('#form_calc')
let rangeVal = form_calc.querySelector('.current')
let res = form_calc.querySelector('#result')
let cube = {
    width: 50,
    height: 2.5,
    length: 0,
    meters: 0

}

form_calc.addEventListener('input', (e) => {
    let target = e.target;
    let data = target.dataset.calc
    let value = target.value
    if (data === 'height') rangeVal.innerHTML = value
    cube[data] = value
    res.innerHTML = calc()
})

function calc() {
    let m3 = cube.height * cube.width * cube.length / 1000
    let m2 = cube.meters
    let res = m3 - m2
    return res.toFixed(1) > 0 ? res : '0.0'
}


let a = document.querySelectorAll('.img__wrap')

for (let i = 0; i < 8; i++) {
    a[i].style.backgroundImage = `url("images/dest/a${i + 1}.jpg")`
    a[i].style.backgroundPosition = `center`
    a[i].style.backgroundRepeat = `no-repeat`
    a[i].style.backgroundSize = `cover`

}

let btnSendToTelegram = document.querySelector('#sendToTelegram')
let modalInpTel = document.querySelector('#modalInpTel')
let modalTelWrap = document.querySelector('.form_tel-wrapper')
let spinner = document.querySelector('.spinner-loading__wrapper')

modalInpTel.addEventListener('blur', () => {
    if (validTel(modalInpTel.value)) modalTelWrap.classList.remove('no-valid')
    else modalTelWrap.classList.add('no-valid')
})
btnSendToTelegram.addEventListener('click', (async evt => {
    if (validTel(modalInpTel.value)) {
        let rad = document.getElementsByName('flexRadioDefault')
        let name = document.querySelector('#userName').value || 'Без имени'
        let checkVal
        rad.forEach(r=>{if (r.checked) checkVal = r.value})
        spinner.classList.remove('d-none')
        await fetch(urlTelegram + modalInpTel.value + ' ' + checkVal + ' ' + name)
            .then(response => response.json())
            .then(data => console.log(data))
        spinner.classList.add('d-none')
    } else {
        console.log(modalInpTel.value)
    }
}))



function validTel(number) {
    return regex.test(number)
}

