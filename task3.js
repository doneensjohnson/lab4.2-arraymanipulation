// Task 3: Render the List in the Browser
// Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
// Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
// Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.

let shoppingList=[];

function addItem(){
    let itemInput = document.getElementById("itemInput");
        console.log("This is the text box where the user types their item", itemInput)
    
    let item = itemInput.value.trim();
        console.log("This is what will be typed", item)

    let itemList = document.getElementById("itemList");
       console.log("This is the unordered list that gets created", itemList)

       {
        shoppingList.push(item);
        let newListItem = document.createElement("li");
        newListItem.textContent = item;
        itemList.appendChild(newListItem);
        itemInput.value = " ";
}
}
function removeLastItem() {
    shoppingList.pop();
    let itemList = document.getElementById("itemList"); 
        itemList.lastElementChild.remove();
        console.log("This should remove the last item from the list.")
    }

// Event Listener for the button click
let addItemButton = document.getElementById("addItemButton");
addItemButton.addEventListener("click", addItem);

let removeItemButton = document.getElementById("removeItemButton");
removeItemButton.addEventListener("click", removeLastItem);