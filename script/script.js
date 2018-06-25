function toggleText() {
  var width = 576; // extra small upper boundary
      var x = document.getElementById("expandable-text");
      if (screen.width > width){
        if (x.className === "collapse") {
            x.className = "show";
        } else { // nothing
        }
    }
}
window.onload = toggleText;
