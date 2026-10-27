export default function ItemRow({ date, children }) {
  return (
    <li className="item-row">
      <span className="item-date">{date}</span>
      <span className="item-content">{children}</span>
    </li>
  );
}
