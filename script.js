let rules = document.querySelector('.rules')
let user = document.querySelector('#user')
let comp = document.querySelector('#comp')
let score = 0
let scores = document.getElementById('scores')
let scores1 = document.getElementById('scores1')
let add = document.querySelector('#add')
let results = document.querySelector('#results')
let compadd = document.querySelector('#comp-add')
let chosen = document.querySelectorAll('#chosen')
function loaded(){
    // rules.style.display = 'flex'
    user.src = localStorage.getItem('cho')
    add.style.background = 'white'
    if (localStorage.getItem('cho') == 'http://127.0.0.1:5500/images/icon-rock.svg') {
        add.classList.add('thingi3')
    }
    if (localStorage.getItem('cho') == 'http://127.0.0.1:5500/images/icon-scissors.svg') {
        add.classList.add('thingi2')
    }else{
        add.classList.add('thingi1')
    }
    score = localStorage.getItem('score')
    setInterval(() => {
        scores.textContent = score
        scores1.textContent = score
    }, 100);

    //  = localStorage.getItem('score')
    randoms()
}
function ruled(){
    rules.style.display = 'flex'
}
function closes(){
    rules.style.display = 'none'
}
chosen.forEach(chosens=>{
    chosens.addEventListener('click',()=>{
        window.location.href = 'step2.html'
        localStorage.setItem('cho',chosens.src)
    })
})
function randoms(){
    let arr = ['http://127.0.0.1:5500/images/icon-rock.svg','http://127.0.0.1:5500/images/icon-scissors.svg','http://127.0.0.1:5500/images/icon-paper.svg']
    let ran = Math.floor(Math.random()* arr.length)+1
    let gen = arr[ran-1]
    comp.src = gen
    result()
    compadd.style.background = 'white'
    // alert(ran)
    if (comp.src == 'http://127.0.0.1:5500/images/icon-rock.svg') {
        compadd.classList.add('thingi3')
    }
    if (comp.src == 'http://127.0.0.1:5500/images/icon-scissors.svg') {
        compadd.classList.add('thingi2')
    }
    if (comp.src == 'http://127.0.0.1:5500/images/icon-paper.svg') {
        compadd.classList.add('thingi1')
    }
}
function result(){
    if (user.src == 'http://127.0.0.1:5500/images/icon-rock.svg' && comp.src == 'http://127.0.0.1:5500/images/icon-scissors.svg' || comp.src == 'http://127.0.0.1:5500/images/icon-paper.svg' && user.src == 'http://127.0.0.1:5500/images/icon-scissors.svg' || user.src == 'http://127.0.0.1:5500/images/icon-paper.svg' && comp.src == 'http://127.0.0.1:5500/images/icon-rock.svg') {
        results.textContent = 'You Win'
        score++
        localStorage.setItem('score',score)
    }else{
        results.textContent = 'You Lose'
    }
    if (comp.src == 'http://127.0.0.1:5500/images/icon-rock.svg' && user.src == 'http://127.0.0.1:5500/images/icon-rock.svg' || user.src == 'http://127.0.0.1:5500/images/icon-paper.svg' && comp.src == 'http://127.0.0.1:5500/images/icon-paper.svg' || comp.src == 'http://127.0.0.1:5500/images/icon-scissors.svg' && user.src == 'http://127.0.0.1:5500/images/icon-scissors.svg') {
        results.textContent = 'Tie'
    }
}
function play(){
    window.location.href = 'index.html'
}
function randomsb(){
    let arr = ['http://127.0.0.1:5500/images/icon-rock.svg','http://127.0.0.1:5500/images/icon-scissors.svg','http://127.0.0.1:5500/images/icon-paper.svg']
    let ran = Math.floor(Math.random()* arr.length)+1
    let gen = arr[ran-1]
    comp.src = gen
    resultb()
    compadd.style.background = 'white'
    // alert(ran)
    if (comp.src == 'http://127.0.0.1:5500/images/icon-rock.svg') {
        compadd.classList.add('thingi3')
    }
    if (comp.src == 'http://127.0.0.1:5500/images/icon-scissors.svg') {
        compadd.classList.add('thingi2')
    }
    if (comp.src == 'http://127.0.0.1:5500/images/icon-paper.svg') {
        compadd.classList.add('thingi1')
    }
}
function resultb(){
    if (user.src == 'http://127.0.0.1:5500/images/icon-rock.svg' && comp.src == 'http://127.0.0.1:5500/images/icon-scissors.svg' || comp.src == 'http://127.0.0.1:5500/images/icon-paper.svg' && user.src == 'http://127.0.0.1:5500/images/icon-scissors.svg' || user.src == 'http://127.0.0.1:5500/images/icon-paper.svg' && comp.src == 'http://127.0.0.1:5500/images/icon-rock.svg') {
        results.textContent = 'You Win'
        score++
        localStorage.setItem('score',score)
    }else{
        results.textContent = 'You Lose'
    }
    if (comp.src == 'http://127.0.0.1:5500/images/icon-rock.svg' && user.src == 'http://127.0.0.1:5500/images/icon-rock.svg' || user.src == 'http://127.0.0.1:5500/images/icon-paper.svg' && comp.src == 'http://127.0.0.1:5500/images/icon-paper.svg' || comp.src == 'http://127.0.0.1:5500/images/icon-scissors.svg' && user.src == 'http://127.0.0.1:5500/images/icon-scissors.svg') {
        results.textContent = 'Tie'
    }
}