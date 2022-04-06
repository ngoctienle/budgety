import { useEffect } from "react";
import { useSelector } from "react-redux";
import { calAmount } from "../helpers";

function useBudgetData() {
  const listData = useSelector((state) => state.listDataIncome);
  const listIncomes = listData.filter((dataItem) => dataItem.amount > 0);
  const listExpenses = listData.filter((dataItem) => dataItem.amount < 0);

  const totalAmountIncomes = calAmount(listIncomes);
  const totalAmountExpenses = calAmount(listExpenses);
  const totalAmount = totalAmountIncomes + totalAmountExpenses;

  useEffect(() => {
    localStorage.setItem("listBudget", JSON.stringify(listData));
  }, [listData]);
  return {
    listIncomes,
    listExpenses,
    totalAmount,
    totalAmountExpenses,
    totalAmountIncomes,
  };
}

export default useBudgetData;
