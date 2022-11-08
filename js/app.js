

let addToDoBtn = document.querySelector("#addToListBtn");

addToDoBtn.addEventListener("click", addToDo);

function addToDo() {
    let toDo = document.querySelector("#toDo").value;

    let todoList = document.querySelector("#todoList");
    let listItem = document.createElement("li");
    let listInput = document.createElement("input");
    listInput.type = "text";
    listInput.classList = "toDos"
    listInput.setAttribute("disabled", "");
    listInput.value = toDo;
    listInput.defaultValue = toDo;

    //remove button
    let removeToDO = document.createElement("span");
    removeToDO.innerHTML = "<span class='material-symbols-outlined delete'>cancel</span>";


    removeToDO.addEventListener("click", remToDo);
    function remToDo() {

        let text = "Are you sure you want to Delete This toDO"

        if (confirm(text) == true) {
            todoList.removeChild(listItem);
            addToDoBtn.removeAttribute("disabled", "");  
        }
        else {

        }


    }

    //edit button
    let editToDo = document.createElement("span");
    editToDo.innerHTML = "<span class='material-symbols-outlined edit'>edit_square</span>";
    editToDo.type ="input"

    editToDo.addEventListener("click", editToDos);

    function editToDos() {
        listInput.removeAttribute("disabled", "");
        editToDo.setAttribute("disabled", "");



        //save button
        let saveToDo = document.createElement("span");
        saveToDo.innerHTML = "<span class='material-symbols-outlined save'>done</span>";
        listItem.appendChild(saveToDo);

        saveToDo.addEventListener("click", saveToDos);

        function saveToDos() {
            listItem.removeChild(saveToDo);

            let text = "Save Changes"

            //get new value
            if (confirm(text) == true) {
                let newTodo = listInput.value;
                listInput.defaultValue = newTodo;

                //disable input
                listInput.setAttribute("disabled", "");
                editToDo.removeAttribute("disabled", "");

                text = "Saved";
            }
            else {
                
                editToDo.removeAttribute("disabled", "");
                listInput.setAttribute("disabled", "");

                text ="Not Saved";

                listInput.value = listInput.defaultValue;
            }
            alert(text);

        }
    }

    

    //appendCHilds

    todoList.appendChild(listItem);
    listItem.appendChild(listInput);
    listItem.appendChild(removeToDO);
    listItem.appendChild(editToDo);
    
    let todoNum = todoList.childElementCount;
    console.log(todoNum);

    switch(true) {
        case(todoNum > 4):
        addToDoBtn.setAttribute("disabled", "");
        break;
        case(todoNum < 5):
        addToDoBtn.removeAttribute("disabled", "");
        default:
            
    }
}



