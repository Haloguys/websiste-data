// Function to show the payment options modal
function showPaymentOptions(productName) {
    selectedProduct = productName;
    var modal = document.getElementById("paymentModal");
    modal.style.display = "block";
  }
  
  // Function to hide the payment options modal
  function hidePaymentOptions() {
    var modal = document.getElementById("paymentModal");
    modal.style.display = "none";
  }
  
  // Function to show the QRIS payment modal
  function showQRISPayment() {
    var qrisModal = document.getElementById("qrisModal");
    qrisModal.style.display = "block";
  }
  
  // Function to hide the QRIS payment modal
  function hideQRISPayment() {
    var qrisModal = document.getElementById("qrisModal");
    qrisModal.style.display = "none";
  }
  
  // Function to show the Dana payment modal
  function showDanaPayment() {
    var danaModal = document.getElementById("danaModal");
    danaModal.style.display = "block";
  }
  
  // Function to hide the Dana payment modal
  function hideDanaPayment() {
    var danaModal = document.getElementById("danaModal");
    danaModal.style.display = "none";
  }
  
