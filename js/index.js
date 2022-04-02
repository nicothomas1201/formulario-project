const $input = document.querySelectorAll('.payForm input:not([type="button"])')
const $cardDateSpan = document.querySelectorAll('.cardDate span')
const $cardDate = document.querySelector('.cardDate')
const $cardNumber = document.querySelector('#cardNumber')

function handleInputClick(){
  this.classList.add('is-active')
}

//keydown
let num = 0
$cardNumber.addEventListener('keydown', () => {
  num = num + 1
  if($cardNumber.value.length === 4){
    $cardNumber.value += ' '
    num = 0
  } else if(num === 4){
    $cardNumber.value += ' '
    num = 0
  }
})

//foco
$input.forEach( item => {
  item.addEventListener('focus', handleInputClick)
})

//quitar foco
$input.forEach(item => {
  item.addEventListener('blur', ( ) => {
    if(item.value === ''){
      return item.classList.remove('is-active')
    }
  })
})

//click
$cardDateSpan.forEach( item => {
  item.addEventListener('click', () => {
    item.setAttribute('contenteditable', true)
    item.textContent = ''
    $cardDate.classList.add('is-active')
  })
})

//quitar el foco
$cardDateSpan.forEach( item => {
  item.addEventListener('blur', () => {
    if(item.textContent === ''){
      $cardDate.classList.remove('is-active')
    }
  })
})

//keydown
$cardDateSpan.forEach( item => {
  item.addEventListener('keydown', (e) => {
    if(item.textContent.length === 2){
      item.setAttribute('contenteditable', false) 
    }
  })
})
