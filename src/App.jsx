import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid';

function App() {
  // サイドバーのノートの状態を管理、ローカルストレージからJavaScript形式で取ってくるために初期値の変更
  // const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes') || []));
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));
  // activeなノートの状態を管理,これはidが引数に入るため、最初はnullにしておくこと
  // const [activeNote, setActiveNote] = useState(null);
  const [activeNote, setActiveNote] = useState(notes.length > 0 ? notes[0].id : null);

  // noteが変更されるたびにローカルストレージに保存されて欲しいから副作用
  useEffect(() => {
    // ローカルストレージにノートを保存する,ただし、JSON形式で保存すること
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // 読み込まれた時だけ一番上のノートを選択する
  // useEffect(() => {
  //   setActiveNote(notes[0].id)
  // }, []);

  const onAddNote = () => {
    console.log('新しくノートが追加されました');

    const newNote = {
      id: uuid(),
      title: '新しいノート',
      content: '',
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

  // const getActiveNote = () => {
  //   // findメソッドで最初に一致した物だけを返す
  //   return notes.find((note) => note.id === activeNote);
  // };

  // activeNoteはidなので、オブジェクトとして加工して渡す
  const activeNoteData = notes.find((note) => note.id === activeNote);

  const onUpdateNote = (updateNote) => {
    // 修正された新しいノートの配列を返す。
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updateNote.id) {
        return updateNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
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
      {/* <Main activeNote={getActiveNote()} /> */}
      <Main activeNoteData={activeNoteData} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
