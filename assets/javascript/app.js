$(document).ready(function(){

    var displayedButtons = [Khal Drago, Jamie Lannister, Jon Snow];

    funtion displayImg(){

        $("displayImages").empty();
        var input = $(this).attr("data-name");
        var limit = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + "&api_key="

        $.ajax ({
            url:  queryURL,
            method: "GET"
        }).done(function(response) {

            for(var j = 0; j < limit; j++)  {

                var displayDiv = $("<div>");
                displayDiv.addClass("holder");

                var image = $("<img>");
                image.attr("src", response.data[j].images.original_still.url);
                image.attr("data-still", response.data[j].images.original _still.url);
                image.attr("data-animate", response.data[j].images.original.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayDiv.append(pRating)

                $("#display-images").append(displayDiv);

            }
        });
    }

    
    funtion renderButtons() {

        $("displayImages").empty();

        for (var i = 0; i < displayedButtons.length; i++) {

            var newButton = $("<button>")
            newButton.attr("class", "btn btn-default");
            newButton.attr("id", "input")
            newButton.attr("dataName", displayedButtons[i]);
            newButton.text(displayedButtons[i]);
            $("#displayButtons").append(newButton);

        }

    }

    funtion imageChangeState() {
        var state = $(this).attr("dataState");
        var animateImage = $(this).attr("dataAnimate");
        var stillImage = $(this).attr("dataStill");

        if (state == "still") {
            $(this).attr("src", stillImage);
            $(this).attr("dataState", "still");
        }
        else if(state == "animate") {
            $(this.attr("src", stillImage);
            $(this).attr("dataState", "still");
        }
    }

    $("#submitPress").on("click", funtion() {
        var input = $("userInput".val().trim();
        form.reset();
        displayedButtons.push(input);

        renderButtons();

        return false;

     
    })

    renderButtons();

    $(document).on("click", "#input", displayImg);
    $(document).on("click", ".gif", imageChangeState);




    
});