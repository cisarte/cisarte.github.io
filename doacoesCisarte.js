$(document).ready(function() {
  // Hide both sections initially
  $(".texto-doacaoDin, .texto-doacaoMat").hide();

  // Handle click for "Doar em dinheiro"
  $(".dindin").click(function() {
    // If the "Doar em dinheiro" section is already open, close it
    if ($(".texto-doacaoDin").is(":visible")) {
      $(".texto-doacaoDin").slideUp();
    } else {
      // Otherwise, close both sections and open the "Doar em dinheiro" section
      $(".texto-doacaoDin, .texto-doacaoMat").slideUp();
      $(".texto-doacaoDin").slideDown();
    }
  });

  // Handle click for "Doar ítens físicos"
  $(".materiais").click(function() {
    // If the "Doar ítens físicos" section is already open, close it
    if ($(".texto-doacaoMat").is(":visible")) {
      $(".texto-doacaoMat").slideUp();
    } else {
      // Otherwise, close both sections and open the "Doar ítens físicos" section
      $(".texto-doacaoDin, .texto-doacaoMat").slideUp();
      $(".texto-doacaoMat").slideDown();
    }
  });
});
