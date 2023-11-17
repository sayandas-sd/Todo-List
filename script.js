const todoList = [{
    name: 'hello',
    dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name,dueDate} = todoObject;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
        " class="delete-button">DELETE</button>
        `;

        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todolist').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-text-input');
    const name = inputElement.value;
    const dateElement = document.querySelector('.js-date-input');
    const dueDate = dateElement.value;
    
    todoList.push({
        name: name,
        dueDate: dueDate
    });

    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}