let student = {
    fName: "",
    sName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    dob: "",
    gender: "",
    skils: []
};

function print(){
    console .log("STUDENT DEATAILS");
    console.log("Firt Name:", student.fName);
    console.log("Second Name:", student.sName);
    console.log("Email Id:", student.email);
    console.log("Phone Number:", student.phone);
    console.log("Date Of Birth:", student.dob);
    console.log("Gender:", student.gender);
    console.log("Address:", student.address);
    console.log("Country:", student.country);
    console.log("Skils:", student.skils);
}


document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const maxDateObj = new Date();
    maxDateObj.setFullYear(today.getFullYear() - 5);
    const maxDate = maxDateObj.toISOString().split('T')[0];

    const minDateObj = new Date();
    minDateObj.setFullYear(today.getFullYear() - 35);
    const minDate = minDateObj.toISOString().split('T')[0];

    const dobInput = document.getElementById("dob");
    dobInput.setAttribute('min', minDate);
    dobInput.setAttribute('max', maxDate);
});

function showError(elemId, errorMsg) {
    document.getElementById(elemId).innerHTML = errorMsg;
}

function toSec1() {
    document.getElementById("sec1").style.display = "flex";
    document.getElementById("sec2").style.display = "none";
}

function toSec2() {
    fnameInput = document.getElementById("fName").value.trim();
    snameInput = document.getElementById("sName").value.trim();
    let valid = true;

    if (fnameInput === "") {
        showError("fNameError", "First Name is required");
        valid = false;
    } else {
        const format = /^[a-zA-Z\s]+$/;
        if (!format.test(fnameInput)) {
          showError("fNameError", "Please enter a valid name");
          valid = false;
        } else {
          showError("fNameError", "");
        }
    }

    if (snameInput === "") {
        showError("sNameError", "Second Name is required");
        valid = false;
    } else {
        const format = /^[a-zA-Z\s]+$/;
        if (!format.test(snameInput)) {
          showError("sNameError", "Please enter a valid name");
          valid = false;
        } else {
          showError("sNameError", "");
        }
    }

    if (!valid) return;

    student.fName = fnameInput;
    student.sName = snameInput;

    document.getElementById("sec1").style.display = "none";
    document.getElementById("sec2").style.display = "flex";
    document.getElementById("sec3").style.display = "none";
}

function toSec3() {
    let email = document.querySelector("#sec2 input[type=email]").value.trim();
    let phone = document.querySelector("#sec2 input[type=tel]").value.trim();
    let valid = true;

    if (email === "" || !email.includes('@')) {
        showError("emailError", "Please enter a valid email address");
        valid = false;
    } else {
        showError("emailError", "");
    }

    if (phone.length !== 10 || isNaN(phone)) {
        showError("phoneError", "Please enter a valid 10-digit phone number");
        valid = false;
    } else {
        showError("phoneError", "");
    }

    if (!valid) return;

    student.email = email;
    student.phone = phone;

    document.getElementById("sec2").style.display = "none";
    document.getElementById("sec3").style.display = "flex";
    document.getElementById("sec4").style.display = "none";
}


function toSec4() {
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let valid = true;

    const today = new Date();
    const dobDate = new Date(dob);

    const maxDate = document.getElementById("dob").getAttribute("max");
    const minDate = document.getElementById("dob").getAttribute("min");


    if (!dob) {
        showError("dobError", "Please select your date of birth");
        valid = false;
    } else if (dobDate > new Date(maxDate)) {
        showError("dobError", `Please select a valid date of birth (must be before ${maxDate})`);
        valid = false;
    } else if (dobDate < new Date(minDate)) {
        showError("dobError", `Please select a valid date of birth (must be after ${minDate})`);
        valid = false;
    } else {
        showError("dobError", "");
    }


    if (!gender) {
        showError("genderError", "Please select your gender");
        valid = false;
    } else {
        showError("genderError", "");
    }

    if (!valid) return;


    student.dob = dob;
    student.gender = gender.value;


    document.getElementById("sec3").style.display = "none";
    document.getElementById("sec4").style.display = "flex";
    document.getElementById("sec5").style.display = "none";
}

function toSec5() {
    let address = document.getElementById("address").value.trim();
    let country = document.getElementById("Country").value;

    let valid = true;

    if (address === "") {
        showError("addressError", "Please enter your address");
        valid = false;
    } else if(address.length < 8){
        showError("addressError", "Address must be at least 8 characters long")
    }else {
        showError("addressError", "");
    }

    if (country === "defult") {
        showError("countryError", "Please select your country");
        valid = false;
    } else {
        showError("countryError", "");
    }

    if (!valid) return;

    
    student.address = address;
    student.country = country;

    document.getElementById("sec4").style.display = "none";
    document.getElementById("sec5").style.display = "flex";
}


function Submit() {
    let checkboxes = document.querySelectorAll('#sec5 input[type="checkbox"]');
    student.skils = [];

    checkboxes.forEach(chk => {
        if (chk.checked) {
            student.skils.push(chk.value);
        }
    });

    if (student.skils.length < 3) {
        showError("skilsError", "Please select at least three skill");
        return;
    } else {
        showError("skilsError", "");
    }

    document.getElementById("sec5").style.display = "none";
    document.getElementById("sec6").style.display = "flex";

    print()
}

function reload(){
    if (confirm('You are going to start a new form. Are you okay with that?')){
        location.reload();
    }else{
        return
    }

    document.getElementById("sec6").style.display = "none";
    document.getElementById("sec1").style.display = "flex";
}

