const show = document.getElementById("show");
const socialicons = document.getElementById("icons");

function showData() {
  if (socialicons.style.visibility === "hidden") {
    socialicons.style.visibility = "visible";
  } else {
    socialicons.style.visibility = "hidden";
  }
}
