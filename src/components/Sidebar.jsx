import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onAddNote, notes }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => {
          return (
            <div key={note.id} className="app-sidebar-note">
              <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button>削除</button>
              </div>
              <p>{note.content}</p>
              <small>
                {/* 日本時間の取得 */}
                {new Date(note.modDate).toLocaleDateString('ja-JP', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
