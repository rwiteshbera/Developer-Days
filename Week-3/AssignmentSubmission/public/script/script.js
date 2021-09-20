const fileName = document.getElementById('fileName');
const uploadFile = document.getElementById('file-upload');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const roll = document.getElementById('roll');
const removeFile = document.getElementById('custom-file-remove');
const submitButton = document.getElementById('submit');

document.getElementById('file-upload').onchange = function(e) {
    removeFile.style.display = 'inline-block';
    var originalName = e.target.files[0].name;
    fileName.innerText = `File Name: ${originalName}`;
};

removeFile.addEventListener('click', function(e) {
    uploadFile.value = null; 
    fileName.innerText = "No File Selected";
    removeFile.style.display = 'none';
});


submitButton.addEventListener('click', function(e) {
    if(uploadFile.files.length == 0){
        alert("Please select a file.");
    } 
    else if (fname.value.length !=0 && lname.value.length!=0 && email.value.length !=0 &&
        roll.value.length != 0){
        alert("File uploaded successfully.");
    }
    else{
        alert("Please give your necessary details.");
    }
});