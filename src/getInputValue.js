export default function getInputValues(currentPriority) {
    const title = document.getElementById("titleInput").value;
    const date = document.getElementById("dateInput").value;
    const description = document.getElementById("descriptionInput").value;
    return { title, date,  description, priority: currentPriority.charAt(0).toUpperCase() + currentPriority.slice(1) };
}