import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-center bg-cover bg-gradient-to-r from-cyan-700 to-violet-200">
      <h1 className="p-5 text-7xl text-transparent font-bold font-sans bg-clip-text bg-gradient-to-r from-slate-200 to-white justify-center items-center flex">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
