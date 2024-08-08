function clearALL() {
    document.getElementById("ma").value = "";
    document.getElementById("mt").value = "";
    document.getElementById("mr").value = "";
    const mortgageType = document.querySelector('input[name="mortgageType"]:checked');
    if (mortgageType) mortgageType.checked = false;
    document.getElementById("monthlyRepayment").innerText = "Results shown here";
    document.getElementById("totalRepayment").innerText =
      'Complete the form and click "calculate repayments" to see what your monthly repayments would be.';
  }

  function calculateRepaymentMortgage(ma, mt, annualInterestRate) {
    let n = mt * 12;
    let r = annualInterestRate / 100 / 12;

    let M = (ma * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    let totalRepayment = M * n;

    return {
      monthlyRepayment: M,
      totalRepayment: totalRepayment,
    };
  }

  function calculateMortgage() {
    let ma = parseFloat(document.getElementById("ma").value);
    let mt = parseInt(document.getElementById("mt").value);
    let mr = parseFloat(document.getElementById("mr").value);
    let mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;

    let result;
    if (mortgageType === "repayment") {
      result = calculateRepaymentMortgage(ma, mt, mr);
    } else {
      // Handle interest-only calculation if needed
    }

    document.getElementById("monthlyRepayment").innerText = `£${result.monthlyRepayment.toFixed(2)}`;
    document.getElementById("totalRepayment").innerText = `£${result.totalRepayment.toFixed(2)}`;
  }