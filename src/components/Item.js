function Item() {
  return (
    <div className="item clearfix">
      <div className="item__description">Salary</div>
      <div className="right clearfix">
        <div className="item__value">+ 2,100.00</div>
        <div className="item__percentage">21%</div>
        <div className="item__delete">
          <button className="item__delete--btn">
            <i className="ion-ios-close-outline" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
