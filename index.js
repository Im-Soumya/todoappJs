const inputField = document.querySelector('.inputField input')
const addButton = document.querySelector('.inputField button')
const listContainer = document.querySelector('.todoList')
const pendingNumber = document.querySelector('.pendingNumber')
const clearButton = document.querySelector('.footer button')

let lists = []

const showTodos = () => {
  let localStorageValue = localStorage.getItem('New Todo')
  if(localStorageValue === null) {
    lists = []
  } else {
    lists = JSON.parse(localStorageValue)
  }
  pendingNumber.innerText = lists.length
  let newTodo = ''
  lists.forEach((list, index) => {
    newTodo += `<div class='listItem'><li>${list}</li><span class='trashIcon'  onclick="deleteTodo(${index})"><i class='fas fa-trash'></i></span></div>`
  })
  listContainer.innerHTML = newTodo
  inputField.value = ''
}
showTodos()

const deleteTodo = (index) => {
  let localStorageValue = localStorage.getItem('New Todo')
  lists = JSON.parse(localStorageValue)
  lists.splice(index, 1)
  localStorage.setItem('New Todo', JSON.stringify(lists))
  showTodos()
}


function addTodo() {
  let userData = inputField.value
  let localStorageValue = localStorage.getItem('New Todo')
  if(localStorageValue === null) {
    lists = []
  } else {
    lists = JSON.parse(localStorageValue)
  }
  if(userData) {
    lists.push(userData) 
  }
  localStorage.setItem('New Todo', JSON.stringify(lists))
  showTodos()
}

function clearAll() {
  lists = []
  localStorage.setItem('New Todo', JSON.stringify(lists))
  showTodos()
}

addButton.addEventListener('click', addTodo)
clearButton.addEventListener('click', clearAll)