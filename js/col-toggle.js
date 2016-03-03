function col_toggle(thead_id,tbody_id,col_toggle_id){
    var thead = document.getElementById(thead_id);
    var tbody = document.getElementById(tbody_id);
    var tbody_count = tbody.childElementCount;
    var col_toggle = document.getElementById(col_toggle_id);

    var ul = document.createElement("ul");

    var header_children = thead.children;
    var header_children_length = header_children.length;

    for(var index = 0 ; index<header_children_length;index++){
        var li = document.createElement("li");
        li.innerText = header_children[index].innerText;

        li.onclick = (function(index){
            return function (){
                col_toggle_function(index);
            }
        })(index);



        ul.appendChild(li);
    }
    col_toggle.appendChild(ul);

    var col_toggle_function = function(col){
        if(thead.children[col].style.display === ""){
            thead.children[col].style.display = "none";
            for(var index = tbody_count; index--;){
                tbody.children[index].children[col].style.display = "none";
            }
        }else {
            thead.children[col].style.display = "";
            for(var index = tbody_count; index--;){
                tbody.children[index].children[col].style.display = "";
            }
        }

    }

}