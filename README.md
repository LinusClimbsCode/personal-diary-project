# Personal Diary

A simple and interactive diary application built with React, Vite, and TailwindCSS. Users can create daily entries, view them as cards, and open details in a modal. Entries are validated, limited to one per day, and persisted in localStorage. This project is designed to practice modern React skills, state/effect management, and clean UI development.

---

## ✨ Features

- **Add diary entries** (Title, Date, Image URL, Content) via a modal form
- **One entry per day**: prevents duplicate dates
- **All fields required**: form validation
- **Entries are persistent**: stored in `localStorage`
- **Card layout**: each entry shows image, date, and title
- **Detail view modal**: click a card to see full entry details
- **Newest-first listing**: most recent entries appear at the top
- **Responsive & styled** with TailwindCSS

---

## 🚀 Demo

_Deployed on Render: (not deployed jet)_

---

## 🏗️ Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── AddEntryModal.jsx
│   ├── EntryForm.jsx
│   ├── EntryList.jsx
│   ├── EntryCard.jsx
│   ├── ViewEntryModal.jsx
│   └── EntryDetails.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📋 Requirements Checklist

| ID      | Requirement                              | Status      |
| ------- | ---------------------------------------- | ----------- |
| FR001   | Public GitHub Repository                 | ✅          |
| FR002   | Incremental Development w/ PRs           | ✅          |
| FR003   | React + Vite Setup                       | ✅          |
| FR004   | TailwindCSS via npm                      | ✅          |
| FR005   | React State & Effects (Hooks)            | ❌          |
| FR006   | “Add Entry” button & modal               | ❌          |
| FR007   | Entry form: Title, Date, Image, Content  | ❌          |
| FR008   | localStorage persistence                 | ❌          |
| FR009   | One-entry-per-day enforcement            | ❌          |
| FR010   | Form validation (all fields required)    | ❌          |
| FR011   | Homepage sorted newest-first             | ❌          |
| FR012   | Load entries on startup                  | ❌          |
| FR013   | Card layout                              | ❌          |
| FR014   | Entry detail modal                       | ❌          |
| FR015   | Deployed to Render                       | ❌          |

---

## 🏁 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/YOUR-USERNAME/personal-diary-project.git
   cd personal-diary-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Deploy to Render**
   - Create a new Static Site on [Render](https://render.com/)
   - Connect your repository and set the build command to `npm run build`
   - Set the publish directory to `dist`

---

## 🛠️ Technologies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [localStorage (Web Storage API)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 📝 Planning & Component Structure

Suggested component tree:
```
App
├── Header
│   └── AddEntryButton
├── EntryList
│   └── EntryCard (repeated)
├── AddEntryModal
│   └── EntryForm
└── ViewEntryModal
    └── EntryDetails
```
- **App**: Owns global state (`entries`, `selectedEntry`, modal flags)
- **Header**: Contains the add button
- **EntryList**: Displays all entries
- **EntryCard**: Single entry preview
- **AddEntryModal**: Modal for entry creation
- **EntryForm**: Form logic/fields
- **ViewEntryModal**: Modal for full entry view

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Render Deployment Docs](https://render.com/docs/static-sites)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 📢 License

This project is for educational purposes only.

---

## 🙋‍♂️ Author

LinusClimbsCode