//this file should contain validation for the email input only



//regex function that returns an email
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//function to actually run
export function validateInput() {
    //grab the email
    const emailAddress = document.getElementById("email").value;

  
    //run the check
    if (validateEmail(emailAddress)) {
        //if the email is valid
        document.getElementById("email").style.borderColor = "green";
        return true;
    } else {
        //if the email is not valid
        document.getElementById("email").style.borderColor = "red";
    }
    return false;  
}