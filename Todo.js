let todoList = [{item: ' ' , dueDate: ''}];
displayItem();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  // for date
  let dateElement = document.querySelector('#todo-date');
  let  todoItem = inputElement.value;

  let todoDate = dateElement.value;
  todoList.push({item : todoItem , dueDate: todoDate});
  inputElement.value=''; // now empty value
  dateElement.value=''; // now empty value
  displayItem();

}
function displayItem(){
  let containerItem = document.querySelector('.todo-conatiner');
  //  in  splice (which element to delete , how many element to delete)
  let newHtml = '';
  for(let i = 0 ; i< todoList.length; i++){
    let item = todoList[i].item;
    let dueDate= todoList[i].dueDate;
    newHtml += 
    `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete"onclick="todoList.splice(${i} , 1) ;displayItem();">Delete</button>
    `;
  }
  containerItem.innerHTML=newHtml;
}