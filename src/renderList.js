import { todoList } from ".";

export default function renderList(){
    const content = document.querySelector(".content");
    content.innerHTML = '';

    todoList.forEach((obj, index) => {

        const todoCard = document.createElement('div');
        todoCard.classList = 'todoCard';

        const todoh1 = document.createElement('h1');
        todoh1.id = 'todoTitle';
        todoh1.textContent = obj.title;

        const dateLabel = document.createElement('label');
        dateLabel.textContent = 'Due by:';
        dateLabel.classList = 'todoLabel';
        const todoDate = document.createElement("p");
        todoDate.id = 'todoDueDate';
        todoDate.textContent = obj.date;

        const descLabel = document.createElement('label');
        descLabel.textContent = 'Decription:';
        descLabel.classList = 'todoLabel';
        const todoDesc = document.createElement("p");
        todoDesc.id = 'todoDesc';
        todoDesc.textContent = obj.description;

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = "Priority:";
        priorityLabel.classList = 'todoLabel';
        const todoPriority = document.createElement("pre");
        todoPriority.id = 'todoPriority';
        todoPriority.textContent = obj.priority;

        const button_div = document.createElement("div");
        button_div.id = "button_div";

        const deleteBtn = document.createElement("button");
        deleteBtn.id = 'todoDelBtn';
        deleteBtn.textContent = "Delete";

        const doneBtn = document.createElement("button");
        doneBtn.id = 'todoDoneBtn';
        doneBtn.textContent = "Complete";

        deleteBtn.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderList();
        })

        content.appendChild(todoCard);
        todoCard.appendChild(todoh1);
        todoCard.appendChild(dateLabel);
        todoCard.appendChild(todoDate);
        todoCard.appendChild(descLabel);
        todoCard.appendChild(todoDesc);
        todoCard.appendChild(priorityLabel);
        todoCard.appendChild(todoPriority);
        todoCard.appendChild(button_div);
        button_div.appendChild(deleteBtn);
        button_div.appendChild(doneBtn);
        
    });


}