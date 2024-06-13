(()=>{
    //state variables and UI variables declared and initialized inside
    //the IIFE.

    //An array that stores the TO-DO list items.
    let toDoListArray=[];
    //UI variables.
    const form=document.querySelector(".form");
    const input=form.querySelector(".form_input");
    const ul=document.querySelector(".toDoList");

    //Event Listeners.
    form.addEventListener("submit",(e)=>{
        //prevent default behaviour-page reload.
        e.preventDefault();
        //Give item a unique ID
        let itemId=String(Date.now());
        //Get/Assign input value.
        let toDoItem=input.Value;
        //Pass ID and item into functions.
        addItemToDOM(itemId,toDoItem);
        addItemToArray(itemId,toDoItem);
        //Clear the input box.(This is the default behaviour but we got rid of that)
        input.Value="";
    });

    //Functions defined within IIFE.
    function addItemToDOM(itemId,toDoItem){
        //create an li
        const li=document.createElement("li");
        li.setAttribute("data-id",itemId);
        //add toDoItem text to li.
        li.innerHTML=toDoItem;
        //add li to the DOM
        ul.appendChild(li);
    }
    function addItemToArray(itemId,toDoItem){
        //add item to array as an object with an ID so we can find
        //and delete later.
        toDoListArray.push({itemId,toDoItem});
        console.log(toDoListArray);
    }
    function removeItemFromDOM(id){
        //get the list item by data ID
        var li=Document.querySelector('[data-id="'+id+'"]');
        //remove list item
        ul.removeChild(li);
    }
    function removeItemFromArray(id){
        //create a new toDoListArray with all li's that don't 
        //match the I.D
        toDoListArray=toDoListArray.filter((item)=>item.itemId !== id);
        console.log(toDoListArray);
    }
})();