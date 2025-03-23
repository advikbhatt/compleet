function runCode() {
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");

  output.textContent = "🟡 Running your code...";

  fetch("/cgi-bin/compleet/execute.cgi", {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: code
  })
    .then(res => res.text())
    .then(result => {
      output.textContent = result;
    })
    .catch(err => {
      output.textContent = "❌ Error: " + err;
    });
}

function newFile() {
  document.getElementById("code").value = "";
}

function copyCode() {
  const code = document.getElementById("code");
  code.select();
  document.execCommand("copy");
  alert("✅ Code copied to clipboard!");
}

function downloadCode() {
  const code = document.getElementById("code").value;
  const blob = new Blob([code], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "code.compleet";
  link.click();
}

function openGitHub() {
  window.open("https://github.com/your-repo", "_blank");
}

function shareCode() {
  alert("🔗 Sharing feature coming soon!");
}
