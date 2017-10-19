$(document).ready(function() {

  $('body').append('<div id="list-container"></div>');
  $('#list-container').append('<div id="list"></div>');
  $('#list-container').append('<div id="input-div"></div>');

  // input div contents
  let $inputText = $("<input>", {"id": "input-text"});
  $('#input-div').append($inputText);
  let $inputButton = $("<button>submit</button>", {"id": "input-button"});
  $inputButton.click(createToDo);
  $('#input-div').append($inputButton);

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

  function deleteToDo(params) {
    let id = params.data.id;
    
    $.ajax({
      type: 'DELETE',
      url: 'todo/delete/' + id,
      success: getToDos,
      dataType: 'json'
    });
  }

  function updateToDo() {
    console.log("trying to update");
  }

  function onSuccess(data) {
    $('#list').empty();
    for (x = 0; x < data.length; x ++) {
      // if($("#" + data[x]._id).length === undefined) {
        // make div element for each todo list item
        let $toDoDiv = $("<div></div>");
        let $textDiv = $("<input>", {id: data[x]._id, "class": "to-do-div"});
        $textDiv.val(data[x].todo);
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