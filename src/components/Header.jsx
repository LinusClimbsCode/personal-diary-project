function Header({ onAddEntry }) {
  return (
    <header className="mx-5 px-6 py-2 flex items-center justify-between text-txclr border-b-2 border-txclr">
      <h1 className="text-1xl font-bold">Personal <br /> Diary</h1>
      <button
        className="px-4 py-2 bg-secondary text-txclr rounded shadow hover:bg-primary transition"
        onClick={onAddEntry}
      >
        Add Entry
      </button>
    </header>
  );
}

export default Header;