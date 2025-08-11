let homeLocal = JSON.parse(localStorage.getItem('student'))

// console.log(homeLocal)
console.log(homeLocal.stydentName);
console.log(homeLocal.stydentId);
console.log(homeLocal.stydentPassword);
console.log(homeLocal.stydentGrading);

let boxDaraja = document.getElementById('boxDaraja')

for (let i = 0; i < homeLocal.stydentGrading; i++) {
    let div = document.createElement('div')
    div.classList.add('flex')
    div.innerHTML = `
<img class= 'w-5 h-5' src="img/star.png" alt="">   
`

    boxDaraja.append(div)
}



let slidedaraja = document.getElementById('slidedaraja')

for (let i = 0; i < homeLocal.stydentGrading; i++) {
    let div = document.createElement('div')
    div.classList.add('flex')
    div.innerHTML = `
<img class= 'w-5 h-5' src="img/star.png" alt="">   
`

    slidedaraja.append(div)
}


