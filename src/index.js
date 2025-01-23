import "./styles.css";
import ClearValues from "./clearValues";
import renderList from "./renderList";

const button = document.querySelectorAll('.priorityButtons');
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("modalClose");
const modal = document.getElementById("modalshow");
const addToListBtn = document.getElementById("addBtn");

let previousButton = null;
let currentPriority = null;
export let todoList = [];
let listIndex = 0;

button.forEach(button => {
    button.addEventListener('click', () => {
        if (previousButton) {
            previousButton.style.backgroundColor = ''; 
        }
        button.style.backgroundColor = 'rgba(35, 44, 36, 0.5)';
        previousButton = button;
        currentPriority = button.getAttribute('data-priority'); 
    });
});

openBtn.addEventListener('click', () => {
    modal.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

const priorityMap = {
    "High": 1,
    "Medium": 2,
    "Low": 3
};
function comparePriority(a, b) {
    return priorityMap[a.priority] - priorityMap[b.priority];
}

addToListBtn.addEventListener('click', async () => {
    const { Card } = await import('./createCard');
    const getInputValues = (await import('./getInputValue')).default;
    const data = getInputValues(currentPriority);
    const obj = new Card(data.title, data.date, data.description, data.priority);
    todoList.push(obj);
    obj.index = listIndex++;
    todoList.sort(comparePriority);
    renderList();
    ClearValues(previousButton);
    modal.style.display = "none";
});
