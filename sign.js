function validate() {  
    var fname = document.reg_form.fname;  
    var lname = document.reg_form.lname;  
    if (fname.value.length <= 0) {  
        alert("Name is required");  
        fname.focus();  
        return false;  
    }  
    if (lname.value.length <= 0) {  
        alert("Last Name is required");  
        lname.focus();  
        return false;  
    }
    if (address.value.length <= 0) {    
        alert("Address is required");    
        address.focus();    
        return false;    
    }    
    if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        return false;    
    }    
    if (course.value == "select course") {    
        alert("Course is required");    
        course.focus();    
        return false;    
    }    
    return false;    
}  