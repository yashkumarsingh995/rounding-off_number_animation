function numberIStarted()
{ 
  document.getElementById("n").style.width="45px";
  document.getElementById("n").style.height="55px";
  var interval1=setTimeout(infoContainerAppearence,500);
  var interval1_1=setTimeout(infoContainerDisappear,1700)
  var interval2=setTimeout(numberJStarted,2100);

  var interval3=setTimeout(numberINormal,1500);
  var interval4=setTimeout(conditionOne,2600);
  var interval5=setTimeout(Ilarge,3000);
  var interval6=setTimeout(Ichange,4000);
  var interval7=setTimeout(conditionOneEnds,4600);
  var interval8=setTimeout(numberINormal,5200);
  var interval9=setTimeout(numberJNormal,5800);
  var interval10=setTimeout(conditionThree,7000);
  var interval11=setTimeout(Ilarge,7800);
  var interval12=setTimeout(final1,8700);
  var interval13=setTimeout(final2,11000);
  var interval14=setTimeout(numberINormal, 13500);
  var interval15=setTimeout(numberJNormal, 13500);
  var interval16=setTimeout(numberJNormal1,13500);
  var interval17=setTimeout(conditionThreeEnds,13500);
}

function infoContainerAppearence(){
  document.getElementById("container-info").style.display="inline-block";
}
function infoContainerDisappear(){
  document.getElementById("container-info").style.display="none";
}

function numberJStarted()
{
  document.getElementById("x").style.width="45px";
  document.getElementById("x").style.height="55px"
}
function numberINormal()
{
  document.getElementById("n").style.width = "20px";
  document.getElementById("n").style.height = "40px";
}
function conditionOne(){
  document.getElementById("condition-one").style.right="0";
}

function Ilarge(){
  document.getElementById("n").style.width = "45px";
  document.getElementById("n").style.height = "75px";
}
function Ichange(){
  document.getElementById("n").style.backgroundColor="skyblue"
  document.getElementById("n").innerText="5";
  
}
function conditionOneEnds() {
  document.getElementById("condition-one").style.right = "-280px";
  document.getElementById("condition-two").style.right = "0";
}

function numberJNormal()
{
  document.getElementById("x").style.width = "20px";
  document.getElementById("x").style.height = "40px";
}
function conditionThree() {
  document.getElementById("condition-two").style.right = "-280px";
  document.getElementById("condition-three").style.right="0";
  document.getElementById("condition-three").style.backgroundColor="brown"
}
function final1(){
  document.getElementById("n").innerText="6";
  document.getElementById("x").style.height="75px";
  document.getElementById("x").style.width="55px"
  document.getElementById("x").innerText=" 2x even"
}
function final2(){
  document.getElementById("n").style.backgroundColor="pink"
  document.getElementById("x").style.height = "75px";
  document.getElementById("x").innerText = "2x+1 odd"
  document.getElementById("x").style.backgroundColor="pink";
}
function numberJNormal1()
{
  document.getElementById("x").innerText="x";
}
function conditionThreeEnds()
{
  document.getElementById("condition-three").style.right="-300px";
}