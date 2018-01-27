// This is a JavaScript file

function save(list){
    var list = getMemoList();
    var time = new Date().getTime();
    list.push({ id: time, time: time, text: text });
    saveMemoList(list);
    try {
        localStorage.setItem("memo_list", JSON.stringify(list));
    } catch (e) {
        alert('Error saving to storage.');
        throw e;
    }
}
    
function menu(){
    location.href="list.html"
    }
    
function getMemoList() {
    var list = localStorage.getItem("memo_list");
    if (list == null) {
        return new Array();
    } else {
        return JSON.parse(list);
    }
}