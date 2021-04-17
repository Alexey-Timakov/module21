import "./index.css";

function summ(a:number, b:number):number {
    return a+b;
}

document.addEventListener("DOMContentLoaded", function() {
    document.write(summ(10,5).toString());
})
