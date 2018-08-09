const manageJournalEntries = Object.create(null, {
    /*
        Purpose: POSTs (creates) a new product in the API
    */
    saveJournalEntry: { 
        value: (entries) => {
        return fetch("http://localhost:8088/entries?_order=desc&_sort=date", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(entries)
            })
            .then(response => response.json())
        }
    },
    editJournalEntry: {
        value: (entryID, newEntry) => {
            return fetch(`http://localhost:8088/entries/${entryID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEntry)
            })
            .then(response => response.json())
        }
    },
    deleteJournalEntry: {
        value: (entryID) => {
            return fetch(`http://localhost:8088/entries/${entryID}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    },
    getEntries: {
        value: () => {
            return fetch("http://localhost:8088/entries?_order=desc&_sort=date")
            .then(response => response.json())
        }
    }
})

module.exports = manageJournalEntries;
