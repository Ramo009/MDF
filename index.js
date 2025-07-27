document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // 🧮 Get all input values
  const spend = parseFloat(document.getElementById("spendId").value);
  const profit = parseFloat(document.getElementById("profit").value);
  const discount = parseFloat(document.getElementById("discount").value);
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);
  const type = document.getElementById("type").value;
  const colorType = document.getElementById("colorType").value;
  const colorId = document.getElementById("colorId").value;
  const colorPrice = parseFloat(document.getElementById("colorPrice").value);
  document.getElementById("resultText").textContent = `نوع پروژه: ${type}`;
  document.getElementById(
    "resultSpend"
  ).textContent = `هزینه: $ ${spend.toLocaleString()}`;

  // Validation
  if (
    isNaN(spend) ||
    isNaN(profit) ||
    isNaN(discount) ||
    isNaN(width) ||
    isNaN(height) ||
    isNaN(colorPrice) ||
    type === "default" ||
    colorType === "default" ||
    colorId.trim() === ""
  ) {
    alert("Please fill in all fields with valid values.");
    return;
  }

  // 📏 Computations
  const area = width * height;
  const profitAmount = (spend * profit) / 100;
  const colorCost = colorPrice * area;
  const preDiscountTotal = spend + profitAmount + colorCost;
  const discountAmount = (profitAmount * discount) / 100;
  const finalTotal = preDiscountTotal - discountAmount;

  // 📊 Update result section
  document.getElementById("resultText").textContent = `Project type: ${type}`;
  document.getElementById(
    "resultSpend"
  ).textContent = `Spend : $ ${spend.toLocaleString()}`;
  document.getElementById("resultType").textContent = `Object : ${type}`;
  document.getElementById(
    "resultSize"
  ).textContent = `Dimensions : ${width}m × ${height}m`;
  document.getElementById(
    "resultArea"
  ).textContent = `Total Area : ${area.toFixed(2)} m²`;
  document.getElementById(
    "resultColor"
  ).textContent = `Color : ${colorId} ${colorType.toLocaleString()}`;
  document.getElementById(
    "resultCost"
  ).textContent = `Cost : $ ${colorCost.toLocaleString()}`;
  document.getElementById(
    "resultDiscount"
  ).textContent = `Discount (${discount}%) : -$ ${discountAmount.toLocaleString()}`;
  document.getElementById(
    "resultProfit"
  ).textContent = `Profit (${profit}%): $ ${profitAmount.toLocaleString()}`;
  document.getElementById(
    "resultFinal"
  ).textContent = `Final Price : $ ${finalTotal.toLocaleString()}`;
  document.getElementById(
    "resultTotal"
  ).textContent = `Total Before Discount : $ ${preDiscountTotal.toLocaleString()}`;

  // Show result block
  document.getElementById("result").style.display = "block";
});

// 🖨️ PDF Generation
document.getElementById("downloadBtn").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const items = [
    document.getElementById("resultText").textContent,
    document.getElementById("resultSpend").textContent,
    document.getElementById("resultType").textContent,
    document.getElementById("resultSize").textContent,
    document.getElementById("resultArea").textContent,
    document.getElementById("resultColor").textContent,
    document.getElementById("resultCost").textContent,
    document.getElementById("resultDiscount").textContent,
    document.getElementById("resultProfit").textContent,
    document.getElementById("resultFinal").textContent,
    document.getElementById("resultTotal").textContent,
  ];

  let yPos = 10;
  items.forEach((line) => {
    doc.text(line, 10, yPos);
    yPos += 10;
  });

  doc.save("MDF-Wood-Calculation.pdf");
});

document.getElementById("downloadBtn1").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const items = [
    document.getElementById("resultText").textContent,
    // document.getElementById("resultSpend").textContent,
    document.getElementById("resultType").textContent,
    document.getElementById("resultSize").textContent,
    document.getElementById("resultArea").textContent,
    document.getElementById("resultColor").textContent,
    // document.getElementById("resultCost").textContent,
    document.getElementById("resultDiscount").textContent,
    // document.getElementById("resultProfit").textContent,
    document.getElementById("resultFinal").textContent,
    document.getElementById("resultTotal").textContent,
  ];

  let yPos = 10;
  items.forEach((line) => {
    doc.text(line, 10, yPos);
    yPos += 10;
  });

  doc.save("MDF-Wood-Calculation.pdf");
});
// label and option elements to farsi
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("option").forEach((option) => {
    if (!option) return;
    if (option.textContent === "Please select:") {
      option.textContent = "لطفا انتخاب کنید:";
    } else if (option.textContent === "Select type:") {
      option.textContent = "نوع پروژه را انتخاب کنید:";
    } else if (option.textContent === "Select color:") {
      option.textContent = "رنگ را انتخاب کنید:";
    } else if (option.textContent === "Select color type:") {
      option.textContent = "نوع رنگ را انتخاب کنید:";
    } else if (option.textContent === "Select color ID:") {
      option.textContent = "شناسه رنگ را انتخاب کنید:";
    } else if (option.textContent === "Select size:") {
      option.textContent = "اندازه را انتخاب کنید:";
    } else if (option.textContent === "Select discount:") {
      option.textContent = "تخفیف را انتخاب کنید:";
    } else if (option.textContent === "Select profit:") {
      option.textContent = "سود را انتخاب کنید:";
    } else if (option.textContent === "Select spend:") {
      option.textContent = "هزینه را انتخاب کنید:";
    } else if (option.textContent === "Select width:") {
      option.textContent = "عرض را انتخاب کنید:";
    } else if (option.textContent === "Select height:") {
      option.textContent = "ارتفاع را انتخاب کنید:";
    }

    if (option.textContent === "Please choice:") {
      option.textContent = "لطفا انتخاب کنید:";
    } else if (option.textContent === "Window") {
      option.textContent = "پنجره";
    } else if (option.textContent === "Dresser") {
      option.textContent = "کمد";
    } else if (option.textContent === "Door") {
      option.textContent = "در";
    } else if (option.textContent === "Board") {
      option.textContent = "تخته";
    } else if (option.textContent === "Iranian") {
      option.textContent = "ایرانی";
    } else if (option.textContent === "Turke") {
      option.textContent = "ترکیه";
    } else if (option.textContent === "Italian") {
      option.textContent = "ایتالیایی";
    } else if (option.textContent === "German") {
      option.textContent = "آلمانی";
    }
    //options also to farsi>  <option value="default" disabled>Please choice:</option>
    if (option.value === "default") {
      option.textContent = "لطفا انتخاب کنید:";
    }
    if (option.value === "window") {
      option.textContent = "پنجره";
    } else if (option.value === "dresser") {
      option.textContent = "کمد";
    } else if (option.value === "door") {
      option.textContent = "در";
    } else if (option.value === "board") {
      option.textContent = "تخته";
    } else if (option.value === "iranian") {
      option.textContent = "ایرانی";
    } else if (option.value === "turke") {
      option.textContent = "ترکیه";
    } else if (option.value === "italian") {
      option.textContent = "ایتالیایی";
    } else if (option.value === "german") {
      option.textContent = "آلمانی";
    }
    /// the value of placeholder to  farsi
  });

  document.querySelectorAll("input[placeholder]").forEach((input) => {
    if (!input) return;
    if (input.placeholder === "Please enter text") {
      input.placeholder = "لطفا متن را وارد کنید";
    } else if (input.placeholder === "Enter width") {
      input.placeholder = "عرض را وارد کنید";
    } else if (input.placeholder === "Enter height") {
      input.placeholder = "ارتفاع را وارد کنید";
    } else if (input.placeholder === "Enter size") {
      input.placeholder = "اندازه را وارد کنید";
    } else if (input.placeholder === "Enter color") {
      input.placeholder = "رنگ را وارد کنید";
    } else if (input.placeholder === "Enter type") {
      input.placeholder = "نوع را وارد کنید";
    } else if (input.placeholder === "Enter color price") {
      input.placeholder = "قیمت رنگ را وارد کنید";
    }
  });
});
