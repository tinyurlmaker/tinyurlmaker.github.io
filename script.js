const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("id");

document.getElementById("reportForm").addEventListener("submit", async e => {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  const response = await fetch("http://127.0.0.1:5001/report", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, id: token})
  });
  const result = await response.json();
  alert(result.message);
});
