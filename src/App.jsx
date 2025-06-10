import { useDiaryEntries } from "./hooks/useDiaryEntries";
import { Header } from "./components";

function App() {
  const {
    entries,
    setEntries,
    isAddModalOpen,
    setIsAddModalOpen,
    isViewModalOpen,
    setIsViewModalOpen,
    selectedEntry,
    setSelectedEntry,
  } = useDiaryEntries();

    return (
    <div className="m-2 p-2 border-2 border-txclr">
        <Header onAddEntry={() => setIsAddModalOpen(true)} />
    </div>
  );

}

export default App;