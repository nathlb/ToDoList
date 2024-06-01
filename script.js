function AddObjectToList() {
    
    const listContainer = document.getElementById("ListOfObject");
    const HeightList = listContainer.clientHeight;
    const deviceWidth = window.innerWidth;

    if (HeightList > deviceWidth * 0.65) {
        return;
    }

    let text = document.getElementById("textToAdd").value;
    if (text.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);

        const list = document.getElementById("ulListOfObject");
        list.appendChild(listItem);


        const inputField = document.getElementById("textToAdd");
        inputField.value = "";
        inputField.placeholder = "";
    }
}

function removeItem(button) {
    const item = button.parentElement;
    item.remove();
}
