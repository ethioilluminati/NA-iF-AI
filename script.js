
document.getElementById("chat-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const message = input.value;
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = "";

  // Simulated bot response
  const response = "✅ Your full stack product is being generated... (This is a placeholder)";
  chatBox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
});
