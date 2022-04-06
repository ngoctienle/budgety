import { v4 as uuidv4 } from "uuid";

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
  return state;
}

export default reducer;
