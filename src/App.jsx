import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid';


function App() {
  // サイドバーのノートの状態を管理
  const [notes, setNotes] = useState([]);

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
  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
