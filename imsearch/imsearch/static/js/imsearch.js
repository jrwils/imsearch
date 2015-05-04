function nextClip() {
    var currentDescTable = $(".desc_table").filter(":visible")[0];
    var currentTableNum = currentDescTable.id.replace("desc_table_", "");
    var nextTableNum = parseInt(currentTableNum) + 1;
    var nextDescTable = $("#desc_table_" + nextTableNum.toString())[0];
    currentDescTable.style.display = "none";
    nextDescTable.style.display = "";
}
