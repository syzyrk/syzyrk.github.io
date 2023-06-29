function confirmPayment() {
  // Wyświetlanie animacji ładowania przez 5 sekund
  document.getElementById("loading-section").style.display = "block";
  setTimeout(function() {
    // Po zakończeniu animacji, wyświetlanie komunikatu o niedostępności płatności
    document.getElementById("loading-section").style.display = "none";
    document.getElementById("payment-unavailable").style.display = "block";
  }, 5000);
}
