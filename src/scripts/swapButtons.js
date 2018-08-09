

const swapButtons = (editID) => {
    const saveButton = document.createElement("button");
    const deleteButton = document.querySelector(`#delete-btn-${editID}`);
    const editButton = document.querySelector(`#edit-entry-${editID}`);
    // removing the edit button that was just clicked
    editButton.remove();
    // setting an id to the saveButton that was created
    saveButton.setAttribute("id", "save-edits");
    // adding text on the save button
    saveButton.textContent = "Save Edited Entry";
    // inserting the save button before the delete button
    document.querySelector(`#entry-${editID}`).insertBefore(saveButton, deleteButton);
    
    // when the save button is clicked...
    saveButton.addEventListener("click", () => {
        // append the edit button back onto the container that was clicked on
        document.querySelector(`#entry-${editID}`).appendChild(editButton);
        // and remove the save button
        saveButton.remove();

    })
    // add a function that changes contenteditable to true so user can change and then when the user hits save the contenteditable will be back to false
}

module.exports = swapButtons;