$(document).ready(function() {

  function createToDo() {
    let input = $('#input-text').val();
    let data = { todo: input };

    $.ajax({
      type: 'POST',
      url: 'todo/create',
      data: data,
      success: getToDos,
      dataType: 'json'
    });
    // $('#input-text').val('');
  }

  function getToDos() {
    $.ajax({
      type: 'GET',
      url: 'todo/get',
      success: onSuccess,
      dataType: 'json'
    });
  }

  function updateToDo(id) {
    console.log("trying to update");
    let input = $('#' + id).val();
    let data = { todo: input };
    
    $.ajax({
      type: 'POST',
      url: 'todo/update/' + id,
      data: data,
      success: getToDos,
      dataType: 'json'
    });
  }
  
  function deleteToDo(params) {
    let id = params.data.id;
    
    $.ajax({
      type: 'DELETE',
      url: 'todo/delete/' + id,
      success: getToDos,
      dataType: 'json'
    });
  }


  function onSuccess(data) {
    $('#list').empty();
    for (x = 0; x < data.length; x ++) {
      // if($("#" + data[x]._id).length === undefined) {
        // make div element for each todo list item
        let id = data[x]._id;
        let $toDoDiv = $("<div></div>");
        let $textDiv = $("<input>", {id: data[x]._id, "class": "to-do-div"});
        $textDiv.val(data[x].todo);
        $textDiv.keypress(function (e) {
          if (e.which === 13) {
            updateToDo(id);
          }
        });

        $toDoDiv.append($textDiv);

        let $deleteButton = $("<button>x</button>", {"class": "delete-button"});
        $deleteButton.click({id: data[x]._id}, deleteToDo);
        $toDoDiv.append($deleteButton);

        $('#list').append($toDoDiv);  
      // }
      
    }
  }

  getToDos();

});






// function getToDos() {
//   fetch('todo/get').then(function(response) {
//     var contentType = response.headers.get("content-type");
//     if(contentType && contentType.includes("application/json")) {
//       return response.json();
//     }
//     throw new TypeError("Oops, we haven't got JSON!");
//   })
//   .then(function(json) { makeList(json); })
//   .catch(function(error) { console.log(error); });
// }


// console.log("main.js loaded");
// let toDoList;

// function getToDos() {
//   fetch('todo/get').then(function(response) {
//     var contentType = response.headers.get("content-type");
//     if(contentType && contentType.includes("application/json")) {
//       return response.json();
//     }
//     throw new TypeError("Oops, we haven't got JSON!");
//   })
//   .then(function(json) { makeList(json); })
//   .catch(function(error) { console.log(error); });
// }


// function makeList(json) {
//   toDoList = json;


//   for (x = 0; x < json.length; x ++) {
//     console.log(json[x]._id);
//     // $("#list").append("<br><div id='" + json[x]._id + "' onClick='deleteItem(" + json[x]._id + ")'>" + json[x].todo +  "</div>");
//     $("#list").append(
//   }

// }

// function deleteItem(todoId) {
//   // console.log("boo");
// }

// getToDos();