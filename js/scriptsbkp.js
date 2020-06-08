function checkAkan() {
  var checkMale=document.getElementById("male").checked;
  var checkFemale=document.getElementById("female").checked;
  var checkDay=document.getElementById("birthDay").value;
  var akanDay=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var maleAkan=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  var femaleAkan=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

  var year = new Date(checkDay).getFullYear();
  var day = new Date(checkDay).getDay();

  if  (!checkDay|| (checkMale ===false && checkFemale ===false)){
    alert("Missing details!! Ensure birth date is entered and Gender is selected");
  }
  else if (isNaN(day)==true)  {
    alert("Enter a valid date");
  }
  else if (year <1900 || year >2099)  {
    alert("Year must be between 1900 and 2099");
    document.getElementById('birthDay').value="";
  }
  else {
    document.getElementById('dayofweek').value=akanDay[day];
      if (checkMale ===true){
        document.getElementById('akan').value=maleAkan[day];
        alert("You were born on a " +akanDay[day] +" and your Akan name is "+maleAkan[day]);
      }
      else if (checkFemale===true) {
        document.getElementById('akan').value=femaleAkan[day];
        alert("You were born on a " +akanDay[day] +" and your Akan name is "+femaleAkan[day]);
      }
  }

}
