import { useState } from "react";

function EntryForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !imageUrl || !content) {
      setError("All fields are required.");
      return;
    }
    setError("");
    onSubmit({ title, date, imageUrl, content });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {error && <div className="text-red-500">{error}</div>}
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
      />
      <textarea
        className="border p-2 rounded"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <div className="flex justify-end gap-2">
        <button type="button" className="px-4 py-2 bg-primary text-txclr rounded hover:bg-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-secondary text-txclr rounded hover:bg-primary">
          Add Entry
        </button>
      </div>
    </form>
  );
}

export default EntryForm;