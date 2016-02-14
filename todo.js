$(document).ready(function() {
  $(document).on("click", ".btn-danger", function(){
    $(this).parent().remove();
  });
  $(".btn-primary").on("click", function(e){
    e.preventDefault();
//prevents default action of an element from happening
    var newItem = $("#newItem").val().trim();
//.val returns or sets the value attribute of selected element(s)
//.trim removes all newlines, spaces and tabs from beg & end of string
    var newRow = $("<tr></tr>");
    var checkbox = $("<input>").attr("checkbox")
//.attr gets the value of an attribute for 1st element in set of matched elemts or attrbts for every match element
    var deleteBtn = $("<button>").addClass("btn btn-danger btn-xs").append("Delete");
    var itemTd = $("<td>").addClass("word-td").append(newItem).append(deleteBtn).prepend(checkbox);
    newRow.append(itemTd);
    $("#listTable").append(newRow);
    $("#newItem").val("").focus();
  });
  $(document).on("click", ".checkboxes", function(){
    var dataState = $(this).attr("data-state");
    if(dataState === "nocheck"){
    $(this).hide(500);
    $(this).parent().attr("class", "str");
    $(this).attr("data-state", "checked");
    }
  });
});