const renderEntryList = (title, content, date, id) => {
    return `
    <div id="entry-${id}">
        <h3 id="h3-${id}" contenteditable="false">${title}</h3>
        <p contenteditable="false">${content}</p>
        <h5>${date}</h5>
        <button id="delete-btn-${id}">Delete Entry</button>
        <button id="edit-entry-${id}">Edit Entry</button>
    </div>
        `
}

module.exports = renderEntryList