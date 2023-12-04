// let quizContent = ["<div class=\"tab\">\n" +
// "                        <h3>Какой нужен блок?</h3>\n" +
// "                        <div class=\"form-check\">\n" +
// "                            <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"wallBlock\" checked>\n" +
// "                            <label class=\"form-check-label\" for=\"wallBlock\">\n" +
// "                                Стеновой блок\n" +
// "                            </label>\n" +
// "                        </div>\n" +
// "                        <div class=\"form-check\">\n" +
// "                            <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"septalBlock\">\n" +
// "                            <label class=\"form-check-label\" for=\"septalBlock\">\n" +
// "                                Перегородочный блок\n" +
// "                            </label>\n" +
// "                        </div>\n" +
// "                        <div class=\"form-check\">\n" +
// "                            <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"аnotherBlock\">\n" +
// "                            <label class=\"form-check-label\" for=\"аnotherBlock\">\n" +
// "                                Другое\n" +
// "                            </label>\n" +
// "                        </div>\n" +
// "                    </div>",
// "<div class=\"tab\">\n" +
// "                        <h3>Сколько кубов Вам нужно?</h3>\n" +
// "                        <div class=\"input-group mb-2\">\n" +
// "                            <div class=\"input-group-text\">\n" +
// "                                <input class=\"form-check-input mt-0\" type=\"radio\" name=\"howMuch\" value=\"\">\n" +
// "                            </div>\n" +
// "                            <input type=\"number\" class=\"form-control\" aria-label=\"Text input with radio button\">\n" +
// "                        </div>\n" +
// "                        <div class=\"input-group\">\n" +
// "                            <div class=\"input-group-text\">\n" +
// "                                <input class=\"form-check-input mt-0\" type=\"radio\" name=\"howMuch\" id=\"needHelp\" value=\"\"\n" +
// "                                       checked>\n" +
// "                            </div>\n" +
// "                            <input type=\"text\" class=\"form-control\" disabled value=\"Нужно помочь в рассчете\">\n" +
// "                        </div>\n" +
// "\n" +
// "    <!--                        <div class=\"form-check\">-->\n" +
// "    <!--                            <input class=\"form-check-input\" type=\"radio\" name=\"howMuch\" checked id=\"needHelp\">-->\n" +
// "    <!--                            <label class=\"form-check-label\" for=\"needHelp\">-->\n" +
// "    <!--                                Нужно помочь в рассчете-->\n" +
// "    <!--                            </label>-->\n" +
// "    <!--                        </div>-->\n" +
// "                    </div>",
// "<div class=\"tab\">\n" +
// "                        <h3>На какой день нужна доставка?</h3>\n" +
// "                        <div class=\"form-check\">\n" +
// "                            <input class=\"form-check-input\" type=\"radio\" name=\"when\" id=\"today\" checked>\n" +
// "                            <label class=\"form-check-label\" for=\"today\">\n" +
// "                                Сегодня\n" +
// "                            </label>\n" +
// "                        </div>\n" +
// "                        <div class=\"form-check\">\n" +
// "                            <input class=\"form-check-input\" type=\"radio\" name=\"when\" id=\"tomorrow\">\n" +
// "                            <label class=\"form-check-label\" for=\"tomorrow\">\n" +
// "                                Завтра\n" +
// "                            </label>\n" +
// "                        </div>\n" +
// "                        <div class=\"form-check\">\n" +
// "                            <input class=\"form-check-input\" type=\"radio\" name=\"when\" id=\"differentDay\">\n" +
// "                            <label class=\"form-check-label\" for=\"differentDay\">\n" +
// "                                В другой день\n" +
// "                            </label>\n" +
// "                        </div>\n" +
// "                    </div>",
// "<div class=\"tab\">\n" +
// "                        <h3>Укажите адрес доставки:</h3>\n" +
// "                        <input class=\"form-control\" type=\"text\"\n" +
// "                               placeholder=\"Область, Населенный пункт, Улица, Дом или ориентир\">\n" +
// "                    </div>",
// "<div class=\"tab\">\n" +
// "                        <h3>Нужен клей или клей-пена?</h3>\n" +
// "                        <div class=\"form-check\">\n" +
// "                            <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"glueYes\" checked>\n" +
// "                            <label class=\"form-check-label\" for=\"glueYes\">\n" +
// "                                Да\n" +
// "                            </label>\n" +
// "                        </div>\n" +
// "                        <div class=\"form-check\">\n" +
// "                            <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"glueNo\">\n" +
// "                            <label class=\"form-check-label\" for=\"glueNo\">\n" +
// "                                Нет\n" +
// "                            </label>\n" +
// "                        </div>\n" +
// "                        <div class=\"form-check\">\n" +
// "                            <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"glueDontKnow\">\n" +
// "                            <label class=\"form-check-label\" for=\"glueDontKnow\">\n" +
// "                                Затрудняюсь ответить\n" +
// "                            </label>\n" +
// "                        </div>\n" +
// "                    </div>",
// "<div class=\"tab\">\n" +
// "                        <h3>Контактная информация:</h3>\n" +
// "                        <input class=\"form-control\" type=\"text\" placeholder=\"Имя\">\n" +
// "                        <input class=\"form-control\" type=\"tel\" placeholder=\"+7 (999) 999 99 99\">\n" +
// "                    </div>"]
//


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


document.querySelectorAll('.img__wrap').forEach((el, i) => {
    el.style.backgroundImage = `url("images/dest/a${i + 1}.jpg")`
    el.style.backgroundPosition = `center`
    el.style.backgroundRepeat = `no-repeat`
    el.style.backgroundSize = `cover`
})

//
// let btnSendToTelegram = document.querySelector('#sendToTelegram')
// let modalInpTel = document.querySelector('#modalInpTel')
// let modalTelWrap = document.querySelector('.form_tel-wrapper')
// let spinner = document.querySelector('.spinner-loading__wrapper')
// let modal = document.querySelector('.modal-call')
let btnCloseModal = document.querySelector('.btn-close-modal')
//
// modalInpTel.addEventListener('blur', () => {
//     if (validTel(modalInpTel.value)) modalTelWrap.classList.remove('no-valid')
//     else modalTelWrap.classList.add('no-valid')
// })
// btnSendToTelegram.addEventListener('click', (async evt => {
//     if (validTel(modalInpTel.value)) {
//         let rad = document.getElementsByName('flexRadioDefault')
//         let name = document.querySelector('#userName').value || 'Без имени'
//         let checkVal
//         rad.forEach(r => {
//             if (r.checked) checkVal = r.value
//         })
//         spinner.classList.remove('d-none')
//         await fetch(urlTelegram + modalInpTel.value + ' ' + checkVal + ' ' + name)
//             .then(response => response.json())
//             .then(data => console.log(data))
//         spinner.classList.add('d-none')
//         btnCloseModal.click()
//     } else {
//         console.log(modalInpTel.value)
//     }
// }))
//
//

function validTel(number) {
    return regex.test(number)
}

let currentTab = 0
let quizForm = document.querySelector('#quizForm')
let tabs = quizForm.querySelectorAll('.tab')
let prevTabBtn = quizForm.querySelector('#prevTab')
let nextTabBtn = quizForm.querySelector('#nextTab')

let inpMeters3 = quizForm.querySelector('#meters3')
let metersRadio = quizForm.querySelector('#metersRadio')
let userPhone = quizForm.querySelector('#userPhone')

userPhone.addEventListener('blur', (e) => {
    if (validTel(userPhone.value)) userPhone.parentElement.classList.remove('no-valid')
    else userPhone.parentElement.classList.add('no-valid')
})

inpMeters3.addEventListener('input', () => {
    metersRadio.checked = 'true'
    metersRadio.value = inpMeters3.value
})


function showTab() {
    tabs.forEach((tab, i) => {
        tab.style.display = (currentTab === i) ? 'block' : 'none'
    })
}


function arrows(n) {
    if (nextTabBtn.innerHTML == 'Отправить') {
        nextTabBtn.type = 'submit'
    }
    currentTab += n
    if (currentTab <= 0) {
        currentTab = 0
        prevTabBtn.style.display = 'none'
    } else {
        prevTabBtn.style.display = 'block'
    }
    if (currentTab == tabs.length - 1) {
        currentTab = tabs.length - 1
        nextTabBtn.innerHTML = 'Отправить'
    } else if (currentTab == tabs.length) {
        currentTab = tabs.length - 1
    } else {
        nextTabBtn.innerHTML = 'Дальше'
    }

    showTab()
}

quizForm.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
    console.log('enter')
});
quizForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(quizForm);
    let ud = {
        whichBlock: formData.get('whichBlock'),
        howMuch: formData.get('howMuch'),
        when: formData.get('when'),
        address: formData.get('address'),
        glue: formData.get('glue'),
        userName: formData.get('userName'),
        userPhone: formData.get('userPhone'),
        amount: formData.get('amount')
    }
    fetch(`${urlTelegram} / Какой блок? ${ud.whichBlock} / Сколько? ${ud.howMuch} / Когда? ${ud.when} / Адрес: ${ud.address} / Клей: ${ud.glue} / Имя: ${ud.userName} / Телефон: ${ud.userPhone}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            btnCloseModal.click()
        })
    showToast()

})

function showToast() {
    let toast = document.querySelector('.toast')
    toast.classList.add('show')
    setTimeout((e) => toast.classList.remove('show'), 15000)

}

showTab()

window.onload = () => {
    document.querySelector('.iFrameWrapper').innerHTML = '<iframe class="flex-grow-1" height="315"\n' +
        '                        src="https://www.youtube.com/embed/ceDIBoFg3Ic?si=SSZYVV2hQIoIJeYh"\n' +
        '                        title="YouTube video player"\n' +
        '                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n' +
        '                        allowfullscreen></iframe>'
}











































