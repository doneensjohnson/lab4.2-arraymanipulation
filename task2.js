// // Task 2: Filter and Search an Array
// // Modify the addItem function to only add the item if it is not already in the shoppingList array.
// // Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).

const prompt = require("prompt-sync")();

let shoppingList = [];

// This is the shoppingList
addItem("flour");
addItem("eggs");
addItem("sugar");
addItem("butter");
addItem("butter");

// Add an item to the shoppingList
function addItem(item) {
     if (shoppingList.includes(item)) {
        console.log(item.charAt(0).toUpperCase() + item.slice(1) + " is already on the shopping list.");
    } else {
        shoppingList.push(item);
    }
}


// Display the list
function displayList() {
    console.log("Display full shopping list:", shoppingList);
}

// // Filtering through the List
// function filterItems(searchTerm) {
//     return shoppingList.filter(function(item) {
//         return item.toLowerCase().includes(searchTerm.toLowerCase());
//     console.log(filterItems("eggs")); 
//     }
// }

// Call the functions
filterItems();
displayList();
