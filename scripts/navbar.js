window.onload = function(){
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } 
    else {
      document.getElementById("navbar").style.top = "-77px";
    }
    prevScrollpos = currentScrollPos;
  }

  let toggle = true
  document.getElementById("navbarS").onclick = ()=>{
    toggle = !toggle
    console.log(toggle)
    document.getElementById("dropdown").style.height = toggle ? "auto": "0"
  }
}