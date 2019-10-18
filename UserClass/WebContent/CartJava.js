 function validatePersonalInfo()
 	{
	 
      var _first = document.info.fname.value;
      var _street = document.info.street.value;
      var _street2 = document.info.street.value;
      var _city = document.info.city.value;
      var _zip = document.info.zip.value;
      var _phone = document.info.phone.value;
      var _email = document.info.email.value;

      if(_first.toString() == ""){console.log("Please enter a full name.");}
      if(_street.toString() == ""){console.log("Please enter your street name.");}
      if(_city.toString() == ""){console.log("Please enter your city.");}
      if(_zip.toString() == ""){console.log("Please enter your zip.");}
      if(_phone.toString() == ""){console.log("Please enter your phone number.");}
      if(_email.toString() == ""){console.log("Please enter your email.");}
      

        var checkZip = checkNum(5);
        var phoneInput = document.info.phone.value;
        var validPhone = false;
        var validZip = false;
         if(checkZip == true){
            validZip = true;
         }
         else{
           console.log("Invalid Zip Code" + validZip);
         }
         if(!checkPhone(phoneInput)){
               console.log("Phone number is invalid." + validPhone);
            }
         else{
             validPhone = true;
         }
         if(validZip && validPhone){
            console.log("Your form has been verified");
         }
    }
 
 function checkPhone(str)
 	{
     var regexp = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4})$/;
      return regexp.test(str);
   }
   function checkNum(length){
     var zipEntry = document.info.zip.value;
     var zipNum = parseInt(zipEntry, 12);
     if (document.info.zip.value.length == length){
       if(zipNum != 0 && isNaN(zipNum) == false){
         return true;
       }
       else {
         return false;
       }
     }
     else {
       return false;
     }
   }


function stringlength(inputtxt, minlength, maxlength)
{ 
	var field = inputtxt.value; 
	var mnlen = minlength;
	var mxlen = maxlength;

	if(field.length<mnlen || field.length> mxlen)
	{ 
		alert("Please input the userid between " +mnlen+ " and " +mxlen+ " characters");
		return false;
	}
	else
	{ 
		alert('Form Saved');
		return true;
	}
}