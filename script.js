function toggleOpen(){
    const check = document.getElementById("sidebarToggle");
    if(check.checked){
        document.querySelector("#menuOpen").style.opacity="1";
    }else{
        document.querySelector("#menuOpen").style.opacity="0";
    }   
}
function toggleClose(){
    const check = document.getElementById("sidebarToggle");
    if(check.checked){
        document.querySelector("#menuOpen").style.opacity="1";
    }else{
        document.querySelector("#menuOpen").style.opacity="0";
    } 
}