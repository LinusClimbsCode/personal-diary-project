import EntryForm from "./EntryForm";

function AddEntryModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    //Bug opacity donst work
    <div className="fixed inset-0 bg-primary bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
        <EntryForm onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  );
}

export default AddEntryModal;