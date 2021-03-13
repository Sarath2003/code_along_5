var todos=[];

var input=prompt("What would you like to do? ");

while(input!=="quit"){
    if(input==="list"){
        listTodo();
    }
    else if(input==="new"){
        addTodo();
    }
    else if(input==="delete"){
        deleteTodo();
    }

    var input=prompt("What would you like to do? ");
}

console.log("OK, YOU QUIT THE APP ");

function listTodo(){
    console.log("********");
    todos.forEach(function(todo,i){
        console.log(i + ": " + todo);
    });
    console.log("*********");
}

function addTodo(){
    var newtodo=prompt("Enter new todo");
    todos.push(newtodo);
    console.log("Added todo");
}

function deleteTodo(){
    var y=prompt("Enter index of todo to delete : ");
    todos.splice(y,1);
    console.log("Deleted todo");
}