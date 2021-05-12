
function readClicked(){
    $.ajax({
      url: "/read",
      type: "GET",
      data: {id:$("#id").val()},
      success: function(data){
        if (!data)
          alert("bad read");
        else if (data.retVal) {//change when determined return names
          $("#name").val(data.retVal.name);
          alert("good read");
        } else
          alert("bad read");
      } ,
      dataType: "json"
    });
  return false;
}
function createClicked(){
    $.ajax({
      url: "/create",
      type: "POST",
      data: {id:$("#id").val(),style:$("#style").val(),cost:$("#cost").val(),view:$('#baseball').is(':checked')},//change what data is sent
      success: function(data){
        if (!data)
          alert("bad create");
        else if (data.retVal)
          alert("good create");
        else
          alert("bad create");
        } ,
      dataType: "json"
    });
  return false;
}
function updateClicked(){
    $.ajax({
      url: "/update",
      type: "PUT",
      data: {id:$("#id").val(),style:$("#style").val(),cost:$("#cost").val(),view:$('#baseball').is(':checked')},//same thing as in create
      success: function(data){
        if (!data)
          alert("bad update");
        else if (data.retVal)
          alert("good update");
        else
          alert("bad update");
      } ,
      dataType: "json"
    });
  return false;
}
function deleteClicked(){
    $.ajax({
      url: "/delete/" + Number($("#id").val()),//change to id
      type: "DELETE",
      success: function(data) {
        if (!data)
          alert("bad delete");
        else if (data.retVal)
          alert("good delete");
        else
          alert("bad delete");
      } ,
      dataType: "json"
    });
    return false;
}
function clearClicked(){
  $("#style").val("spanish")
  $("#cost").val(0)
  $('#view').prop('checked',false)
}

$(document).ready(function(){
  $("#readButton").click(readClicked);
  $("#createButton").click(createClicked);
  $("#updateButton").click(updateClicked);
  $("#deleteButton").click(deleteClicked);
  $("#clearButton").click(clearClicked);
});
