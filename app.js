const API_URL = "https://tuo-backend-render.onrender.com/api/v1";

async function saveBotSettings() {
  const proposeMenu = document.getElementById('proposeMenuToggle').checked;
  const waNumber = document.getElementById('waNumberInput').value;

  const res = await fetch(`${API_URL}/config`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ propose_menu: proposeMenu, wa_number: waNumber })
  });

  if (res.ok) alert("Impostazioni aggiornate con successo!");
}

function handleUpload() {
  alert("File inviati alla cartella Google Drive dell'Agente!");
}

function approve(status) {
  alert(status ? "Contenuto pubblicato sui canali!" : "Bozza scartata.");
  document.getElementById('approvalCard').style.display = 'none';
}
