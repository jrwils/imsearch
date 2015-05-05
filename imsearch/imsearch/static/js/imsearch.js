function setCurrentNum(clipNum) {
    $("#video_num").html(clipNum); 
}

function nextClip(direction) {
    var currentDescTable = $(".desc_table").filter(":visible")[0];
    var currentTableNum = currentDescTable.id.replace("desc_table_", "");

    if (direction=='forward') {
        var nextTableNum = parseInt(currentTableNum) + 1;
    } else if (direction=='backward') {
        var nextTableNum = parseInt(currentTableNum) - 1;
    } else {
        // return if no direction given
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
}
