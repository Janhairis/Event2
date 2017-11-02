// Using the files lister.html and lister.js, build a page with an empty
//  unordered list and a form containing a single text input field. 
//  When the form is submitted, the page should not reload. 
//  Instead, use document.createElement() to build a list item (li) 
//  where the innerText is the value in the text input field. 
//  Add this list item to the end of the unordered list. Also, 
//  reset the value of the text input field to an empty string.

// Continuing with the files lister.*, make is so that when a 
// user clicks an item on the list, the text of the item receives a 
// line-through styling to signify that it is completed. If the user 
// clicks a completed item, the line-through styling should be removed.

// Continuing with the files lister.*, add a button with the text, 
// "Remove all completed items." When a user clicks the button, every
//  finished item (ie every item with a line-through) should be 
//  removed from the page. HINT: You can use Element.style.textDecoration
//   to see if an item is "completed".


    function newList() {
        var input =  document.querySelector("#todoitem")
        if (input.value) {
            let list = document.querySelector("ul");
            let newItem = document.createElement("li");
            newItem.innerText = input.value
            list.appendChild(newItem)
            input.value = "";
        }
    }
    
    var listItems = document.querySelector("ul");
    
    listItems.addEventListener("click", function (event) {
        let target = event.target
        if (target.tagName.toUpperCase() == 'LI') {
            target.style.textDecoration = 
            target.style.textDecoration !== 'line-through' ? 'line-through' : 'none'
        }
    })
    
    let submit = document.querySelector("#addnew");
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        newList();
        // console.log(listItems.childNodes.length);
    })
    
    let button = document.querySelector("#removedone");
    button.addEventListener("click", function (event) {
        var listItems = document.querySelectorAll('li')
        var list = document.querySelector('ul')
        for (var i = 0; i < listItems.length; i++){
            if(listItems[i].style.textDecoration === 'line-through'){
                list.removeChild(listItems[i])
            }
        }
    })