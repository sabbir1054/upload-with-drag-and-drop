

const dropDownArea = document.querySelector(".container"),
    dragText = dropDownArea.querySelector('.header'),
    button = dropDownArea.querySelector('button'),
    input=dropDownArea.querySelector("input")
let file;



button.onclick = () => {
    input.click();
}
input.addEventListener('change', function () {
    file = this.files[0];
    showFile();
})




//If User Drag file in Drag Area
dropDownArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropDownArea.classList.add("active");
    dragText.textContent="Release to Upload File"
    
});
 



//If User leave Drag file in Drag Area
const dropOutArea = document.querySelector(".container");
dropOutArea.addEventListener("dragleave", () => {
    dropOutArea.classList.remove("active");
    dragText.textContent="Drag & Drop to Upload File"
});




//If User drop file in darg area Area
const dropArea = document.querySelector(".container");
dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
});



// File showing function
function showFile() {
      let fileType = file.type;
    console.log(file);
    let validExtention = ['image/jpeg', 'image/jpg', 'image/png'];
    if (validExtention.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileUrl = fileReader.result;
            console.log(fileUrl);
            let imgTag = `<img src=" ${fileUrl} ">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } 
    else {
        alert("File formate  is not valid");
        dropOutArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}