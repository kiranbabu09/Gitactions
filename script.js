function triggerAlarm() {
  const status = document.getElementById("status");
  const sound = document.getElementById("alarmSound");
  
  status.innerText = "FIRE DETECTED! 🔥";
  status.style.color = "red";
  sound.play();

  alert("Fire alarm triggered!");
}
