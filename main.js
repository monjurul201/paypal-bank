//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";


})

//DepositBtn even handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);

  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const total = depositNumber + currentDepositNumber;
  // document.getElementById("currentDeposit").innerText = total;

  updateSpantext("currentDeposit", depositNumber);
  updateSpantext("currentBallance", depositNumber);
  document.getElementById("depositAmount").value = ""


})
// withdraw button even handler
  const withdrawBtn = document.getElementById("addWithdraw");
  withdrawBtn.addEventListener("click", function () {
  const withdrawNumber=getInputNumber("withdrawAmount");

   updateSpantext("currentWithdraw",withdrawNumber)
   updateSpantext("currentBallance",-1*withdrawNumber)
   document.getElementById("withdrawAmount").value = ""
  })
function getInputNumber(id){
  const withdrawAmount = document.getElementById(id).value;
  const withdrawNumber = parseFloat(withdrawAmount);
  return withdrawNumber
}

  function updateSpantext(id, depositNumber) {
    const currentBallance = document.getElementById(id).innerText;
    const currentAmount = parseFloat(currentBallance);
    const totalBallance = currentAmount + depositNumber;
    document.getElementById(id).innerText = totalBallance;
  }
