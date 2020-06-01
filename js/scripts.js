function checkAkan() {
  var checkMale=document.getElementById("male").checked;
  var checkFemale=document.getElementById("female").checked;
  var checkDay=parseInt(document.getElementById("birthDay").value);
  var checkMonth=parseInt(document.getElementById("birthMonth").value);
  var checkYear=parseInt(document.getElementById("birthYear").value);
  var akanDay=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var maleAkan=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  var femaleAkan=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
  var century = Math.floor(checkYear/100);
  var year = checkYear %100;
  var day =Math.floor((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(checkMonth+1)/10)) + checkDay) % 7);

  if (day <=0 || day >7)  {
    day=1;
  }
  if  (!checkDay|| !checkMonth || !checkYear || (checkMale ===false && checkFemale ===false)){
    alert("Missing details!! Ensure birth date is entered and Gender is selected");
  }
  else {
    document.getElementById('dayofweek').value=akanDay[day-1];
      if (checkMale ===true){
        document.getElementById('akan').value=maleAkan[day-1];
        alert("You were born on a " +akanDay[day-1] +" and your Akan name is "+maleAkan[day-1]);
      }
      else if (checkFemale===true) {
        document.getElementById('akan').value=femaleAkan[day-1];
        alert("You were born on a " +akanDay[day-1] +" and your Akan name is "+femaleAkan[day-1]);
      }
  }

}
