const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("id");

document.getElementById("reportForm").addEventListener("submit", async e => {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  const response = await fetch("https://tinyurl-ra30.onrender.com/report", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, id: token})
  });
  const result = await response.json();
  alert(result.message);
});

