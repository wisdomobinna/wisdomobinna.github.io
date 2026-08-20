export default function ItemRow({ date, children }) {
  return (
    <div className="item-row">
      <span className="item-date">{date}</span>
      <span className="item-content">{children}</span>
    </div>
  );
}
