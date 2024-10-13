export default function Item({ name, quantity, category }) {
  return (
    <section>
      <ul className="p-5 m-5 font-sans bg-white shadow-lg">
        <li className="font-bold text-2xl text-slate-700">{name}</li>
        <li>
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
