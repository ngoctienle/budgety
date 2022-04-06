const numberConfig = { style: "currency", currency: "VND" };

export function formatStringAmount(amount) {
  let sign = "+";
  let amountFormatted = amount;
  if (amount < 0) {
    sign = "-";
    amountFormatted = amount * -1;
  }
  amountFormatted = new Intl.NumberFormat("vi-VN", numberConfig).format(
    amountFormatted
  );
  amountFormatted = amountFormatted.substring(0, amountFormatted.length - 2);
  return `${sign} ${amountFormatted}`;
}

export function calAmount(listData) {
  let total = 0;
  for (let i = 0; i < listData.length; i++) {
    const amount = listData[i].amount;
    total += amount;
  }
  return total;
}

export function formatPercent(amount, total) {
  if (!total) {
    return "0%";
  }

  let percent = Math.round((amount / total) * 100);
  if (percent < 0) {
    percent = percent * -1;
  }
  return percent + "%";
}

export function defiMonth() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let nameMonth = month[d.getMonth()];
  return nameMonth;
}
