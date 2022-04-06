function BudgetForm() {
  // {/* Trường hợp chọn dấu - */}
  // <div className="add">
  //   <div className="add__container">
  //     <select className="add__type red-focus">
  //       <option value="inc">+</option>
  //       <option value="exp" selected>
  //         -
  //       </option>
  //     </select>
  //     <input
  //       type="text"
  //       className="add__description red-focus"
  //       placeholder="Add description"
  //     />
  //     <input
  //       type="number"
  //       className="add__value red-focus"
  //       placeholder="Value"
  //     />
  //     <button className="add__btn red">
  //       <i className="ion-ios-checkmark-outline" />
  //     </button>
  //   </div>
  // </div>
  return (
    // {/* Trường hợp dấu + */}
    <div className="add">
      <div className="add__container">
        <select className="add__type">
          <option value="inc" selected>
            +
          </option>
          <option value="exp">-</option>
        </select>
        <input
          type="text"
          className="add__description"
          placeholder="Add description"
        />
        <input type="number" className="add__value" placeholder="Value" />
        <button className="add__btn">
          <i className="ion-ios-checkmark-outline" />
        </button>
      </div>
    </div>
  );
}

export default BudgetForm;
