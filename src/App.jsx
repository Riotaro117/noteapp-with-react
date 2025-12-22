import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid';

function App() {
  // サイドバーのノートの状態を管理
  const [notes, setNotes] = useState([]);
  // activeなノートの状態を管理,これはidが引数に入るため、最初はnullにしておくこと
  const [activeNote, setActiveNote] = useState(null);

  const onAddNote = () => {
    console.log('新しくノートが追加されました');

    const newNote = {
      id: uuid(),
      title: '新しいノート',
      content: '新しいノートの内容',
      modDate: Date.now(),
    };
    // 元の配列をコピーして新しいオブジェクトを追加していく
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    console.log('ノートが削除されました');
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  );
}

export default App;
