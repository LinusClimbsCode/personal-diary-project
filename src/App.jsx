import { useDiaryEntries } from "./hooks/useDiaryEntries";

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


}

export default App;