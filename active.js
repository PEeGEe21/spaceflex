function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

function out(){
    document.getElementById('email_label').style.fontSize='16px';

}

function tog(){
    document.getElementById('email_label').style.fontSize= '12px';
    document.getElementById('password_label').style.fontSize= '16px';

}


function wog(){
    document.getElementById('email_label').style.fontSize='16px';
    document.getElementById('password_label').style.fontSize='12px'

}
