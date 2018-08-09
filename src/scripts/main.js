const formManager = require("./journalForm.js");
const manageJournalEntry = require("./DataManager.js");
const getEntries = require("./entryList.js")
const renderEntryList = require("./entryComponent.js");
const swapButtons = require("./swapButtons.js")

renderForm = () => {
    return document.querySelector("#form-container").innerHTML = formManager.renderEntryForm();
}
renderForm();

// getting the entries from the API and putting them on the DOM when the page loads
getEntries();


// listening for a click on the saveEntryButton inside of the form component
document.querySelector("#saveEntryButton").addEventListener("click", (title, content) => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date(Date.now())
    }

    // POST to API
    manageJournalEntry.saveJournalEntry(newEntry)
        // Save the entry to the API
        .then((entry) => {
            // Clear the form fields
            formManager.clearForm();
            // Put HTML representation on the DOM
            const entryContainer = document.querySelector("#entry-container");
            // set the innerHTML to and empty string, so the page is empty when we call the function to get the entries
            entryContainer.innerHTML = "";
            // call the function that gets the entries AND prints it to DOM
            getEntries();

        })
        
})
    
// function that is listening for an event on the entire container that holds the entries
document.querySelector("#entry-container").addEventListener("click", (event) => {
    // if the event target id INCLUDES the string "delete-btn-",
    if (event.target.id.includes("delete-btn-")) {
        // split and return the number assigned to each individual button
        const getID = event.target.id.split("-")[2];
        // use that newly separeated number to select the same div the target entry is in
        let entryContainer = document.querySelector(`#entry-${getID}`)
        // remove that element
        entryContainer.remove();

        // Deleting the entry from the API
        manageJournalEntry.deleteJournalEntry(getID)
    }

    if(event.target.id.includes("edit-entry-")){
        const editID = event.target.id.split("-")[2];
        console.log(event);
        swapButtons(editID);
   
        manageJournalEntry.editJournalEntry(editID)
    }
})
