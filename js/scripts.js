function checkAkan() {
  alert("Test complete");
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
//(d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
  //alert(document.getElementById('gender').value);
  // if (document.getElementById("male").checked = true){
  //   gender1 ="male";
  // }

  console.log(typeof checkYear);
  alert(typeof checkYear+" checkMale is " + checkMale +" checkFemale " + checkFemale +" Day " + checkDay
+"Year " + century +"Calculated day " + day);
  //alert(document.getElementsByName('gender').);
  //var gender =document.getElementById('gender').value
}
