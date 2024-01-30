//全域變數

const amountEl = document.querySelector("#amount");
const yearsEl = document.querySelector("#years");
const rateEl = document.querySelector("#rate");
const payment1El = document.querySelector("#payment1");
const payment1E2 = document.querySelector("#payment2");
const feeEl = document.querySelector("#fee");
const calcEl = document.querySelector("#calc");
const tableEl = document.querySelector("#table");

console.log(calcEl, amountEl, yearsEl, rateEl, payment1El, payment1E2, feeEl);



calcEl.addEventListener("click", calcLoan);

function calcLoan() {
    let amount = amountEl.value * 10000;
    let years = yearsEl.value;
    let rate = rateEl.value;
    let fee = feeEl.checked ? 5000 : 0;
    // 不同計算
    let rule = payment1El.checked ? 1 : 2;
    
    let result;
    if (rule == 1){
        result = rule1(amount,years,rate);
        console.log(result);
    } else {
        alert("還沒做");
        return;
    }

    let totalInterest = result[1];
    let totalAmount = amount + totalInterest + fee;
    console.log(amount,years,rate,fee,rule,totalAmount,totalInterest);
    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? "" : "(含手續費)");
    document.querySelector(".totalInterest").innerText = totalInterest;
    const resultEl = document.querySelector("#result");
    resultEl.style.display = "none";
    setTimeout(function () {
        resultEl.style.display = "block";
    }, 500);

    drawTable(result[0]);
}

function drawTable(datas){
    let tableStr = "<ul>";
    for(let i=0;i<datas;i++){
        tableStr += `<li>${datas[i].join(",")}</li>`;
    }
    tableStr += "</ul>";
    tableEl.innerHTML = tableStr;
}

function rule1(total_amount,years,rate){
    let amount = total_amount;
    let period = years*12;
    let month_rate = rate/100/12;
    let month_pay = parseInt(amount/period);

    let datas = [];
    let totalInterest = 0;
    for(let i = 0;i<period; i++){
        interset = Math.round(amount * month_rate);
        
    }

}