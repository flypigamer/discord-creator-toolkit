const generateButton = document.getElementById("generateTimestamp");
const dateTimeInput = document.getElementById("dateTime");
const formatInput = document.getElementById("timestampFormat");
const result = document.getElementById("timestampResult");

generateButton.addEventListener("click", () => {
  if (!dateTimeInput.value) {
    alert("Pehle date aur time select karo!");
    return;
  }

  const date = new Date(dateTimeInput.value);
  const unixTime = Math.floor(date.getTime() / 1000);
  const format = formatInput.value;

  const timestamp = `<t:${unixTime}:${format}>`;

  result.innerHTML = `
    <p>Your Discord Timestamp:</p>
    <code>${timestamp}</code>
    <button id="copyTimestamp">Copy</button>
  `;

  document.getElementById("copyTimestamp").addEventListener("click", () => {
    navigator.clipboard.writeText(timestamp);
    alert("Timestamp copied! ✅");
  });
});
