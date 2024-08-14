//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value);

  if (!isNaN(delay)) {
    await delayMessage(delay);
    document.getElementById('output').textContent = text;
  } else {
    alert('Please enter a valid delay');
  }
});

function delayMessage(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}