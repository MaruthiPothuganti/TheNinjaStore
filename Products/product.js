let slider = document.getElementById("price-filter");
let output = document.getElementById("price-range");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
