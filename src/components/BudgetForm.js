import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import cls from "classnames";
import { actAddIncome } from "../store/actions";

function BudgetForm() {
  const [formData, setFormData] = useState({
    sign: "+",
    description: "",
    amount: "",
  });
  const dispatch = useDispatch();
  const refDescription = useRef(null);

  const onChangeData = (evt) => {
    let key = evt.target.name;
    let value = evt.target.value;

    if (key === "amount" && value !== "") {
      value = Number(value);
    }
    if (value < 0) {
      alert("Negative numbers are not allowed");
      return;
    }

    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    if (!formData.amount || !formData.description) {
      alert("Input cannot be empty");
      return;
    }
    dispatch(actAddIncome(formData));
    setFormData({
      sign: "+",
      description: "",
      amount: "",
    });
    refDescription.current.focus();
  };

  const handleKeyUp = (evt) => {
    if (evt.key === "Enter") {
      handleSubmit();
    }
  };

  const isShowRed = formData.sign === "-";
  return (
    // {/* Trường hợp dấu + */}
    <div className="add">
      <div className="add__container">
        <select
          className={cls("add__type", { "red-focus": isShowRed })}
          value={formData.sign}
          onChange={onChangeData}
          name="sign"
        >
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input
          type="text"
          className={cls("add__description", { "red-focus": isShowRed })}
          placeholder="Add description"
          value={formData.description}
          ref={refDescription}
          onChange={onChangeData}
          name="description"
        />
        <input
          type="number"
          className={cls("add__value", { "red-focus": isShowRed })}
          placeholder="Value"
          value={formData.amount}
          onChange={onChangeData}
          name="amount"
          onKeyUp={handleKeyUp}
        />
        <button
          className={cls("add__btn", { red: isShowRed })}
          onClick={handleSubmit}
        >
          <i className="ion-ios-checkmark-outline" />
        </button>
      </div>
    </div>
  );
}

export default BudgetForm;
