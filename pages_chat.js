export default function Chat() {
  return (
    <div style={{ padding: '2rem', color: '#fff', background: '#111', minHeight: '100vh' }}>
      <h2>AI Chat – Build Your Product</h2>
      <textarea placeholder="Type your product idea..." style={{ width: '100%', height: '100px' }} />
      <button style={{ marginTop: '1rem' }}>Submit to AI</button>
    </div>
  );
}