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
console.log(a)
for (let i = 0; i < 8; i++) {
    console.log(i, a[i])
    a[i].style.backgroundImage = `url("images/dest/a${i + 1}.jpg")`
    a[i].style.backgroundPosition = `center`
    a[i].style.backgroundRepeat = `no-repeat`
    a[i].style.backgroundSize = `cover`


    console.log(a[i].firstChild)
}