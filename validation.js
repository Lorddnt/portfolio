
function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value
    };

const serviceID = "service_jw3dith";
const templateID = "template_tz156h9";

emailjs.send(serviceID, templateID, params).then((res) =>{
    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("subject").value ="";
    document.getElementById("message").value ="";
    console.log(res);
    alert("Your message has been sent sucessfully!");
})
.catch((err) => console.log(err));
}

// Function to clear input fields after form submission
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}



