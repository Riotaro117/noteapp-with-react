import React from 'react';
import './Main.css';

const Main = ({ activeNoteData }) => {
  if (!activeNoteData) {
    return <div className='no-active-note'>ノートが選択されていません</div>;
  }
  // getActiveNote();
  console.log(activeNoteData)
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder="ノート内容を記入"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNoteData.title}</h1>
        <div className="markdown-preview">{activeNoteData.content}</div>
      </div>
    </div>
  );
};

export default Main;
