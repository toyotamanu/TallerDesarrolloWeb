import React, { useState } from 'react';
import ChatWidget from './ChatWidget';

export default function IaFloat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="ia-float"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Chatea con nuestro Asistente IA"
      >
        <div className="ia-message">
          <p className="msg-title">¿Tienes preguntas?</p>
          <p className="msg-sub"><strong>Asistente IA</strong></p>
        </div>
        <a href="#" onClick={(e) => { e.preventDefault(); setOpen(true); }} aria-label="Asistente IA">
          {/* tu SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 1 3 3v1h1a3 3 0 0 1 3 3v4a7 7 0 0 1-7 7h-1a7 7 0 0 1-7-7V9a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3Zm-3 9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm1 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"/></svg>
        </a>
      </div>

      <ChatWidget open={open} onClose={() => setOpen(false)} />
    </>
  );
}

