function setCurrentNum(clipNum) {
    $("#video_num").html(clipNum); 
}

function nextClip() {
    var currentDescTable = $(".desc_table").filter(":visible")[0];
    var currentTableNum = currentDescTable.id.replace("desc_table_", "");
    var nextTableNum = parseInt(currentTableNum) + 1;
    var nextDescTable = $("#desc_table_" + nextTableNum.toString())[0];

    var clipInp = $("#clip_" + nextTableNum.toString());
    var clipSrc = clipInp[0].value;
    var vidFrame = $("#video_embed");   

    currentDescTable.style.display = "none";
    nextDescTable.style.display = "";
    vidFrame[0].src = clipSrc;
    setCurrentNum((nextTableNum + 1).toString());
}
