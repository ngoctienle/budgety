import { formatPercent, formatStringAmount } from "../helpers";

function Item({ data, total }) {
  const { id, description, amount } = data;
  return (
    <div className="item clearfix">
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">{formatStringAmount(amount)}</div>
        {amount < 0 && (
          <div className="item__percentage">{formatPercent(amount, total)}</div>
        )}
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
