function startAnimation() {
    let id = null;
    let element = document.getElementById("path");
    let position = 0;
    clearInterval(id);
    id = setInterval(animate, 10);
    function animate() {
      if (position == 450) {
        clearInterval(id);
      } else if (position == 448) {
        element.style.top = position + "px";
      } else {
        position++;
        element.style.left = position + "px";
      }
    }
  }