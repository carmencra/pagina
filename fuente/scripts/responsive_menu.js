function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += "_responsive";
    } else {
      x.className = "menu";
    }

    var y = document.getElementById("compra");
    if (y.className === "compra") {
      y.className += "_responsive";
    } else {
      y.className = "compra";
    }

    var z = document.getElementById("header");
    if (z.className === "header") {
      z.className += "_responsive";
    } else {
      z.className = "header";
    }
} 