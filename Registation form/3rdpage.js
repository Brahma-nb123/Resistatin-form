var loader=function(e)
{
    let file=e.target.files;

    let show="<span>Selec File</span>"+File[0].na
    let output=document.getElementById("selector");
    output.classList.add("active");
};
//add evenet listener for input
let fileInput=document.getElementById("file");
fileInput.addEventListener("change",loader);



localStorage.clear();