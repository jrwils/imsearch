function setCurrentNum(clipNum) {
    $("#video_num").html(clipNum); 
}

function showNavButtons(tableNum) {
    // we don't want to show the 'previous nav button for the first video
    // or the 'next' nav button for the last video
    var prevButton = $("#prev_button")[0];
    var nextButton = $("#next_button")[0];
    var numVideos = $(".desc_table").length;
    if (tableNum == 0) {
        prevButton.style.display = "none";
        nextButton.style.display = "";
    } else if (tableNum == (numVideos - 1)) {
        prevButton.style.display = "";
        nextButton.style.display = "none";
    } else {
        prevButton.style.display = "";
        nextButton.style.display = "";
    }
}

function nextClip(direction) {
    var currentDescTable = $(".desc_table").filter(":visible")[0];
    var currentTableNum = currentDescTable.id.replace("desc_table_", "");
    var currentTableNum = currentDescTable.id.replace("desc_table_", "");

    if (direction=='forward') {
        var nextTableNum = parseInt(currentTableNum) + 1;
    } else if (direction=='backward') {
        var nextTableNum = parseInt(currentTableNum) - 1;
    } else {
        // return if no valid direction given
        return
    }
    var nextDescTable = $("#desc_table_" + nextTableNum.toString())[0];

    var clipInp = $("#clip_" + nextTableNum.toString());
    var clipSrc = clipInp[0].value;
    var vidFrame = $("#video_embed");   

    currentDescTable.style.display = "none";
    nextDescTable.style.display = "";
    vidFrame[0].src = clipSrc;
    setCurrentNum((nextTableNum + 1).toString());

    showNavButtons(nextTableNum);
}

$(document).ready(function() {
    $("#next_button").click(function() {
        nextClip("forward");
    });
    $("#prev_button").click(function() {
        nextClip("backward");
    });
});
