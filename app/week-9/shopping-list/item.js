export default function Item({ name, quantity, category, onSelect }) {
  return (
    <section>
      <ul className="p-5 m-5 font-sans bg-white shadow-lg">
        <li
          className="font-bold text-2xl text-slate-700"
          onClick={() => onSelect(name)}
        >
          {name}
        </li>
        <li>
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
