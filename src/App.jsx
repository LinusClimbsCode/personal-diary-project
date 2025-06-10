import { useDiaryEntries } from './hooks/useDiaryEntries';
import { Header, AddEntryModal } from './components';

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

  // Handle adding a new entry
  const handleAddEntry = (newEntry) => {
    // Check for one-entry-per-day
    if (entries.some((entry) => entry.date === newEntry.date)) {
      alert(
        'An entry for this date already exists. Please choose another day.'
      );
      return;
    }
    setEntries([{ ...newEntry }, ...entries]);
    setIsAddModalOpen(false);
  };

  return (
    <div className="m-2 p-2 border-2 border-txclr">
      <Header onAddEntry={() => setIsAddModalOpen(true)} />
      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddEntry}
      />
    </div>
  );
}

export default App;
