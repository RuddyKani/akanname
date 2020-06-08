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

  if (day <0 || day >7)  {
    day=1;
  }

  if  (!checkDay|| !checkMonth || !checkYear || (checkMale ===false && checkFemale ===false)){
    alert("Missing details!! Ensure birth date is entered and Gender is selected");
  }
  else if (checkDay <=0 || checkDay >31)  {
    alert("Day must be between 1 and 31");
    document.getElementById('birthDay').value="";
  }
  else if (checkMonth <=0 ||  checkMonth>12)  {
    alert("Month must be between 1 and 12");
    document.getElementById('birthMonth').value="";
  }
  else if (checkYear <1900 || checkYear >2099)  {
    alert("Year must be between 1900 and 2099");
    document.getElementById('birthYear').value="";
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
