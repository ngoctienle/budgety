import { v4 as uuidv4 } from "uuid";
import { ACT_ADD_INCOME, ACT_DELETE_INCOME } from "./actions";

const initState = {
  listDataIncome: [
    {
      id: uuidv4(),
      description: "Chi tieu 06/04/2022",
      amount: -150000,
    },
    {
      id: uuidv4(),
      description: "Thu nhap thang 04",
      amount: 6500000,
    },
    {
      id: uuidv4(),
      description: "Chi tieu 07/04/2022",
      amount: -200000,
    },
    {
      id: uuidv4(),
      description: "Thu nhap thang 03",
      amount: 5500000,
    },
    {
      id: uuidv4(),
      description: "Chi tieu 08/04/2022",
      amount: -25000,
    },
  ],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_DELETE_INCOME:
      const idDeleted = action.payload.id;
      const dataIncomeAfterDelete = state.listDataIncome.filter((dataItem) => {
        return dataItem.id !== idDeleted;
      });
      console.log("dataIncomeAfterDelete", dataIncomeAfterDelete);
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
