const question = document.querySelectorAll('.question-title')
const text = document.querySelectorAll('.text-answer')
const btn = document.querySelectorAll('.btn')


btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (btn.firstElementChild.classList.contains('btn-active')) {
            btn.firstElementChild.classList.remove('btn-active')
            btn.lastElementChild.classList.add('btn-active')
            text.item(index).setAttribute('hidden', true)
        }
        else{
          btn.firstElementChild.classList.add('btn-active')
          btn.lastElementChild.classList.remove('btn-active')
          text.item(index).removeAttribute('hidden')
        }
    })  
})