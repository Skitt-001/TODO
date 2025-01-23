function ClearValues(previousButton){
    const title = document.getElementById("titleInput");
    const date = document.getElementById("dateInput");
    const description = document.getElementById("descriptionInput");

    title.value = '';
    date.value = '';
    description.value = '';

    if (previousButton) {
        previousButton.style.backgroundColor = '';
    }
}

export default ClearValues;