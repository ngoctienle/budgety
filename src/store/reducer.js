import { v4 as uuidv4 } from "uuid";
import { ACT_ADD_INCOME, ACT_DELETE_INCOME } from "./actions";

function getDataFromLocalStorage() {
  try {
    const dataFromLocalStorage = localStorage.getItem("listBudget") || "[]";
    return JSON.parse(dataFromLocalStorage);
  } catch (error) {
    return [];
  }
}

const initState = {
  listDataIncome: getDataFromLocalStorage(),
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_DELETE_INCOME:
      const idDeleted = action.payload.id;
      const dataIncomeAfterDelete = state.listDataIncome.filter((dataItem) => {
        return dataItem.id !== idDeleted;
      });
      return {
        ...state,
        listDataIncome: dataIncomeAfterDelete,
      };
    case ACT_ADD_INCOME:
      const data = action.payload.data;
      const newIncomeItem = {
        id: uuidv4(),
        description: data.description,
        amount: data.sign === "+" ? data.amount : data.amount * -1,
      };
      return {
        ...state,
        listDataIncome: [...state.listDataIncome, newIncomeItem],
      };
    default:
      return state;
  }
}

export default reducer;
