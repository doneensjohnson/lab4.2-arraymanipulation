// Task 1: Array Manipulation Basics
// Create an empty array called shoppingList.
// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// Write a function called removeLastItem that removes the last item from the shoppingList array.
// Write a function called displayList that logs all items in the shoppingList array to the console.

const prompt = require("prompt-sync")();

let shoppingList = [];

// Add an item to the shoppingList
function addItem(item) {
    shoppingList.push(item);
}

// This is the start of the shopping list
addItem("flour");
addItem("eggs");
addItem("sugar");
addItem("butter");

// Give the option to add more items
function moreItems() {
    let yourItem = prompt("Add an item to your shopping list. Type done when finished:");

    while (yourItem.toLowerCase() !== "done") {
        shoppingList.push(yourItem);

        yourItem = prompt("Add another item or type 'done': ");
    }
}

// Remove the last item (no is not an option)
function removeLastItem() {
    let response = prompt("Would you like to remove the last item? Type yes: ");

    if (response.toLowerCase() === "yes") {
        shoppingList.pop();
    }
}

// Display the list
function displayList() {
    console.log("Display full shopping list:", shoppingList);
}

// Call the functions
moreItems();
removeLastItem();
displayList();

