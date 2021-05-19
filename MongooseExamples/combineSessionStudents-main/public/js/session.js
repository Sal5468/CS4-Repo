


  		function readClicked(){


          $.ajax({
            url: "/read",
            type: "GET",
            data: {},
            success: function(data){
              if (!data.retVal)
                alert("bad read");
              else {

            if (data.retVal.driverslicence)
              $("#diriversL").prop("checked",true);
            else
              $("#diriversL").prop("checked",false);

            if (data.retVal.volleyball)
              $("#volleyball").prop("checked",true);
            else
              $("#volleyball").prop("checked",false);

            if (data.retVal.basketball)
              $("#basketball").prop("checked",true);
            else
              $("#basketball").prop("checked",false);

            if (data.retVal.soccer)
              $("#soccer").prop("checked",true);
            else
              $("#soccer").prop("checked",false);

                $("#grade").val(data.retVal.grade);


                alert("good read");
              }
            } ,
            dataType: "json"
          });
  		  return false;
  		}


      function updateClicked(){
      //    alert($("#diriversL").prop("checked"))
          $.ajax({
            url: "/update",
            type: "PUT",

            data: {
            grade:$("#grade").val(),volleyball:$("#volleyball").prop("checked"),basketball:$("#basketball").prop("checked"),
            soccer:$("#soccer").prop("checked"),driversL:$("#diriversL").prop("checked")

            },
            success: function(data){
              if (!data.retVal)
                alert("bad update");
              else
                alert("good update");
            } ,
            dataType: "json"
          });
        return false;
      }


function logoutClicked(){
	$.get("/logout",function(data){
		window.location = data.redirect;
	});
	return false;
}

function passwordUpdate(){

    if ($("#psw").val() == "")
    {
      alert("bad password update");
      return false;
    }
    $.post("/changepsw",{password:$("#psw").val()},function(data)
    {
      alert("good password update");
      $("#psw").val("")
      return false;
    });
    return false;
}


$(document).ready(function(){
  console.log("session ready");
//  $("#createButton").click(createClicked);
  $("#readButton").click(readClicked);
  $("#updateButton").click(updateClicked);
//  $("#deleteButton").click(deleteClicked);

  $("#psw").keydown( function( event ) {
      if ( event.which === 13 ) {
        passwordUpdate();
        event.preventDefault();
        return false;
      }
  });

	$.get("/userInfo",function(data){
      console.log("in userInfo");
		if (data.retVal.name) {
      console.log(data.retVal.grade);
      console.log(data.retVal.driverslicence);
      console.log(data.retVal.volleyball);
      console.log(data.retVal.basketball);
      console.log(data.retVal.soccer);
			$("#session").html("Session " + data.retVal.name + " " + data.retVal.ident);

      if (data.retVal.driverslicence)
        $("#diriversL").prop("checked",true);
      else
        $("#diriversL").prop("checked",false);

      if (data.retVal.volleyball)
        $("#volleyball").prop("checked",true);
      else
        $("#volleyball").prop("checked",false);

      if (data.retVal.basketball)
        $("#basketball").prop("checked",true);
      else
        $("#basketball").prop("checked",false);

      if (data.retVal.soccer)
        $("#soccer").prop("checked",true);
      else
        $("#soccer").prop("checked",false);

      $("#grade").val(data.retVal.grade);



    }
	});

	$("#logout").click(logoutClicked);

  $("form").submit(function(event)
  {
//        if ($("#identifier").val() == "") {
//          alert("NO ID");
//          return false;
//        }
//        if ($("#name").val() == "") {
//          alert("NO NAME");
//          return false;
//        }


    return false;
  })



});
