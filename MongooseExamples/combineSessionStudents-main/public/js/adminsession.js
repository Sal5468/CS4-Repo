
let identList = [];

  		function readClicked(){


        if ($("#names").val() == null)
          return false;

console.log($("#names").val());
console.log($("select[name='names'] option:selected").index());
console.log(identList[$("select[name='names'] option:selected").index()].ident);


let zident = identList[$("select[name='names'] option:selected").index()].ident;
console.log("zident " + zident);

    $.get("/readAdmin",{ident:zident},

          function(data){
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
            }

          );



  		  return false;
  		}


      function updateClicked(){


console.log($("#names").val());
console.log($("select[name='names'] option:selected").index());
console.log(identList[$("select[name='names'] option:selected").index()].ident);


let zident = identList[$("select[name='names'] option:selected").index()].ident;
console.log("zident " + zident);


          $.ajax({
            url: "/updateAdmin",
            type: "PUT",

            data: {ident:zident,name:$("#names").val(),
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


$(document).ready(function(){

  console.log("adminsession ready");
//  $("#createButton").click(createClicked);
  $("#readButton").click(readClicked);
  $("#updateButton").click(updateClicked);
//  $("#deleteButton").click(deleteClicked);

  $("#names").change(function(){
    readClicked()
  })


	$.get("/adminInfo",function(data){
		if (data.username) {
      console.log("in adminInfo");
      $("#session").html("Admin Session " + data.username + " " + data.ident);
      identList = [];
//console.log(data.userList);
        for (let i=0;i<data.userList.length;i++) {
          console.log(data.userList[i].name);
          identList.push({ident:data.userList[i].ident});
          $('#names').append($('<option>', { value : data.userList[i].name }).text(data.userList[i].name));
        }


        readClicked()
    }
	});

	$("#logout").click(logoutClicked);


});
