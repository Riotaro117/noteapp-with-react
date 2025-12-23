import React from 'react';
import './Main.css';
import Markdown from 'react-markdown';

const Main = ({ activeNoteData, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNoteData,
      [key]: value,
      modDate: Date.now(),
    });
  };
  if (!activeNoteData) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }
  // getActiveNote();
  console.log(activeNoteData);

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNoteData.title}
          onChange={(e) => onEditNote('title', e.target.value)}
        />
        <textarea
          id="content"
          placeholder="ノート内容を記入"
          value={activeNoteData.content}
          onChange={(e) => onEditNote('content', e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNoteData.title}</h1>
        <div className="markdown-preview">
          <Markdown>{activeNoteData.content}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Main;
