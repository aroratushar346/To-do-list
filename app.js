const inputbox=document.getElementById("input-box");
const tasklist=document.getElementById("task-list");

function addtask(){
    if(inputbox.value==""){
        alert("enter any task to add");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        tasklist.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
tasklist.addEventListener("click",function (e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",tasklist.innerHTML);
}
function showtask(){
    tasklist.innerHTML=localStorage.getItem("data");
}
showtask();