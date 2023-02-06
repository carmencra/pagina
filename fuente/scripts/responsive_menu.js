function myFunction() {
    var x = document.getElementById("top_nav");
    if (x.className === "top_nav") {
      x.className += "_responsive";
    } else {
      x.className = "top_nav";
    }

    var y = document.getElementById("compra");
    if (y.className === "compra") {
      y.className += "_responsive";
    } else {
      y.className = "compra";
    }
} 