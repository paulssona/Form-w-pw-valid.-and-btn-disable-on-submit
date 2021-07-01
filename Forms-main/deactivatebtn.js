// Disable btn Logic
function disableButton() {
    var btn = document.getElementById('btn');
    btn.disabled = true;
    btn.innerText = 'Submitting...'
    btn.style.cursor = "wait"
}

console.log(btn)