function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6c7Xctz053h":
        Script1();
        break;
      case "6GyhN8ExZmc":
        Script2();
        break;
      case "5xBdIWURN9d":
        Script3();
        break;
      case "6CDnRQhHPtQ":
        Script4();
        break;
      case "6lr0XPkDNCp":
        Script5();
        break;
  }
}

function Script1()
{
  // Getting the player
const player = GetPlayer();


// Begin checks
function update() {

// Declare variables
const farmVal1 = player.GetVar("farmA");
const farmB = player.GetVar("farmB");
const metalVal = player.GetVar("metalVal");
const industryVal = player.GetVar("industryVal");
const starCity = player.GetVar("starCity");
const budget = 1900;

// Calculate the total amount spent
const spentSoFar = (+farmB + +metalVal + +farmVal1 + +starCity);
const newSpend = (+spentSoFar + +industryVal);

// If the user goes over budget
if(newSpend > 1900) {
// Set the input back to the original value
player.SetVar("allo", (+industryVal + +farmB + +metalVal + +starCity + +farmVal1))
const allocation = player.GetVar("allo");
player.SetVar("total", (1900 - +allocation))
} else {
player.SetVar("total", (1900 - +newSpend))
player.SetVar("allo", newSpend)
}}
update();
}

function Script2()
{
  // Getting the player
const player = GetPlayer();


// Begin checks
function update() {

// Declare variables
const farmVal1 = player.GetVar("farmA");
const farmB = player.GetVar("farmB");
const metalVal = player.GetVar("metalVal");
const industryVal = player.GetVar("industryVal");
const starCity = player.GetVar("starCity");
const budget = 1900;

// Calculate the total amount spent
const spentSoFar = (+farmB + +industryVal + +farmVal1 + +starCity);
const newSpend = (+spentSoFar + +metalVal);

// If the user goes over budget
if(newSpend > 1900) {
// Set the input back to the original value
player.SetVar("allo", (+metalVal + +farmB + +industryVal + +starCity + +farmVal1))
const allocation = player.GetVar("allo");
player.SetVar("total", (1900 - +allocation))
} else {
player.SetVar("total", (1900 - +newSpend))
player.SetVar("allo", newSpend)
}}
update();
}

function Script3()
{
  // Getting the player
const player = GetPlayer();


// Begin checks
function update() {

// Declare variables
const farmVal1 = player.GetVar("farmA");
const farmB = player.GetVar("farmB");
const metalVal = player.GetVar("metalVal");
const industryVal = player.GetVar("industryVal");
const total = player.GetVar("total");
const starCity = player.GetVar("starCity");
const budget = 1900;

// Calculate the total amount spent
const spentSoFar = (+farmVal1 + +metalVal + +industryVal + +starCity);
const newSpend = (+spentSoFar + +farmB);

// If the user goes over budget
if(newSpend > 1900) {
// Display a message with how much they went over
console.log("over budget")
// Set the input back to the original value
player.SetVar("allo", (+farmB + +farmVal1 + +metalVal + +industryVal + +starCity))
const allocation = player.GetVar("allo");
player.SetVar("total", (1900 - +allocation))
} else {
player.SetVar("total", (1900 - +newSpend))
player.SetVar("allo", newSpend)
}}
update();
}

function Script4()
{
  // Getting the player
const player = GetPlayer();


// Begin checks
function update() {

// Declare variables
const farmVal1 = player.GetVar("farmA");
const farmB = player.GetVar("farmB");
const metalVal = player.GetVar("metalVal");
const industryVal = player.GetVar("industryVal");
const starCity = player.GetVar("starCity");
const budget = 1900;

// Calculate the total amount spent
const spentSoFar = (+farmVal1 + +metalVal + +industryVal + +farmB);
const newSpend = (+spentSoFar + +starCity);

// If the user goes over budget
if(newSpend > 1900) {
// Set the input back to the original value
player.SetVar("allo", (+starCity + +farmB + +metalVal + +industryVal + +farmVal1))
const allocation = player.GetVar("allo");
player.SetVar("total", (1900 - +allocation))
} else {
player.SetVar("total", (1900 - +newSpend))
player.SetVar("allo", newSpend)
}}
update();
}

function Script5()
{
  // Getting the player
const player = GetPlayer();


// Begin checks
function update() {

// Declare variables
const farmVal1 = player.GetVar("farmA");
const farmB = player.GetVar("farmB");
const metalVal = player.GetVar("metalVal");
const industryVal = player.GetVar("industryVal");
const starCity = player.GetVar("starCity");
const budget = 1900;

// Calculate the total amount spent
const spentSoFar = (+farmB + +metalVal + +industryVal + +starCity);
const newSpend = (+spentSoFar + +farmVal1);

// If the user goes over budget
if(newSpend > 1900) {
// Set the input back to the original value
player.SetVar("allo", (+farmVal1 + +farmB + +metalVal + +industryVal + +starCity))
const allocation = player.GetVar("allo");
player.SetVar("total", (1900 - +allocation))
} else {
player.SetVar("total", (1900 - +newSpend))
player.SetVar("allo", newSpend)
}}
update();
}

