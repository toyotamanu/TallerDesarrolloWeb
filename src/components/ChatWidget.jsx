import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Eres el asistente de STB. Responde breve y claro.' },
    { role: 'assistant', content: '¡Hola! ¿En qué te ayudo hoy?' },
  ]);
  const [input, setInput] = useState('');
  const boxRef = useRef(null);

  useEffect(() => {
    if (open && boxRef.current) boxRef.current.focus();
  }, [open]);

  if (!open) return null;

  const sendMessage = async (e) => {
    e.preventDefault();
    const userMsg = { role: 'user', content: input.trim() };
    if (!userMsg.content) return;
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const res = await fetch('/api/chat.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });
      const data = await res.json();
      const assistant = data?.reply ?? 'Lo siento, no pude responder en este momento.';
      setMessages(prev => [...prev, { role: 'assistant', content: assistant }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error al contactar el servicio.' }]);
    }
  };

  return (
    <div className="fixed inset-0 z-[1060]" style={{ position:'fixed', inset:0, zIndex:1060 }}>
      {/* backdrop */}
      <div onClick={onClose} style={{ position:'absolute', inset:0, background:'rgba(0,0,0,.35)' }} />
      {/* panel */}
      <div style={{
        position:'absolute', right:0, top:0, height:'100%', width:'min(420px, 100%)',
        background:'#fff', boxShadow:'-8px 0 24px rgba(0,0,0,.18)', display:'flex', flexDirection:'column'
      }}>
        <div style={{ padding:'12px 16px', borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <strong>Asistente IA</strong>
          <button onClick={onClose} className="btn btn-sm btn-secondary">Cerrar</button>
        </div>

        <div style={{ flex:1, overflowY:'auto', padding:'16px', background:'#f7f8fb' }}>
          {messages.filter(m => m.role !== 'system').map((m, i) => (
            <div key={i} style={{
              margin:'10px 0',
              display:'flex',
              justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start'
            }}>
              <div style={{
                maxWidth:'80%',
                padding:'10px 12px',
                borderRadius:10,
                background: m.role === 'user' ? '#0d6efd' : '#fff',
                color: m.role === 'user' ? '#fff' : '#333',
                boxShadow: m.role === 'user' ? 'none' : '0 4px 12px rgba(0,0,0,.08)'
              }}>
                {m.content}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} style={{ padding:'12px', borderTop:'1px solid #eee', display:'flex', gap:8 }}>
          <input
            ref={boxRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            className="form-control"
            placeholder="Escribe tu mensaje…"
          />
          <button className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
}
