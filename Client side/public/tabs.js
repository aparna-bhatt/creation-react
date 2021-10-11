function openTab(evt, tabname) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("text");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTabpage(evt,tabname){
    var tabview = document.getElementsByClassName("containerform");
    tabview[0].style.display = "block";
    openTab(evt,tabname);
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        var tabview = document.getElementsByClassName("containerform");
		if(tabview[0].style.display=="block")
        {
            tabview[0].style.display ="none";
        }
	}
    document.getElementsByTagName("body").style.background
});
