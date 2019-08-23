function getTotal(){
  const amounts = document.getElementsByClassName('list-amount')

  let numArr = []

  for(let i = 0; i < amounts.length; i++){
    numArr.push(+amounts[i].innerText.slice(1))
  }

  let total = numArr.reduce(function(acc, element){
    return acc + element
  }, 0)

  let totalHold = document.querySelector('.total-text')

  totalHold.innerText = `Budget Total: $${total}`
}

let id = 0

function addItem() {
  const nameInput = document.getElementById('expense-name')
  const amountInput = document.getElementById('expense-amount')

  let newItem = document.createElement(`li`)
  newItem.classList.add('list-item')
  newItem.id = id
  
  
  newItem.innerHTML = `
  <p>${nameInput.value}</p>
  <p class='list-amount'>$${amountInput.value}</p> 
  <img onclick='removeItem(${id})' src='./assets/trash_can.svg'/>`

  const list = document.getElementById('expense-list')
  list.append(newItem)

  nameInput.value = ''
  amountInput.value = ''
  id++
  getTotal()
}

function removeItem(id){
  let item = document.getElementById(id)
  item.remove()
  getTotal()
}