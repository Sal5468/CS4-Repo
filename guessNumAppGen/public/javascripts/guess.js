//public/javascripts/guess.js===============


    function success(data) {
        let outputStr = "";
          if (data.info == 1)
        {
          outputStr = "Choose a smaller number";
        }
        else if (data.info == -1)
        {
          outputStr = "Choose a larger number";
        }
        else
        {
          outputStr = "You got it in " + data.numTries + " tries.";
        }
        $("#list").append('<li>'+outputStr+'</li>');
        $("#list-input").val("");
      }

      $(document).ready(function(){

        $.post("/init",null,null);

        $.get("/getminmax", null,function(data){
          $("#tellPlayer").text("Enter a number from " + data.minVal + " to " + data.maxVal);
          $('#minVal').val(data.minVal);
          $('#maxVal').val(data.maxVal);
        });

        $("#list-input").keypress(function(event) {
            if (event.keyCode != 13)
                return;
            let userNum = parseInt($("#list-input").val());
            let outputStr;
            if (isNaN(userNum))
            {
                outputStr = "Not a Number";
                $("#list").append('<li>'+outputStr+'</li>');
                $("#list-input").val("");
            }
            else
            {
                $.get("/guess", {guessNum:userNum},success);
                  return false;
            }
        });
    });
