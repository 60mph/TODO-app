var tasks_list = [""];
var i = 0;
var tasksSectionHTML = "<ul class=\"tasks_ul\">";
var doneButtonHTML = "<input type=\"radio\" class=\"radioBut\"onmouseout=\"removeTask(this)\"";

function newTaskButton() {
  var tasksSection = document.getElementById('tasks_list');
  var newDescr = document.getElementById('TaskDescr');
  //alert(tasks_list[i]);
  tasksSection.innerHTML += "<li class=\"tasks_li\" id=\"li" + i + "\">" + doneButtonHTML + "id=\"rad" + i + "\""
  + "><p class =\"liDescr\">" + newDescr.value + "</p></li>";
  //tasksSection.innerHTML += "</ul>";
  //tasksSection.innerHTML= tasksSectionHTML + "</ul>";
  newDescr.value = "";
  i++;
}
function removeTask(but) {
  //confirm("Do you want to remove it?");
  //console.log(but.checked);
  if(but.checked == true)
  {
    console.log(but.id);
    var remId = String(but.id).substr(3,but.id.lenght);
    var remTask = document.getElementById('li' + remId)
    remTask.innerHTML = "";
    remTask.style.height = 0;
  }
}
