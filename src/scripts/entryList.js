const manageJournalEntry = require("./DataManager")
const renderEntryList = require("./entryComponent")

/*
    PURPOSE: Takes an entry form the API (manageJournalEntry), and puts it on the DOM (function from renderEntryList)
*/

const getEntries = () => {
manageJournalEntry.getEntries()
    .then((entries)=>{
        entries.forEach(entry => {
            document.querySelector("#entry-container").innerHTML += renderEntryList(entry.title, entry.content, entry.date, entry.id); 
        })
    })
}
module.exports = getEntries;
