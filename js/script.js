/* MUDAR A COR DO NAV */

(function () {
    var menu = document.getElementById('bgNav'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('bg-change-nav'); // > 0 ou outro valor desejado
        else menu.classList.remove('bg-change-nav');
    });
})();

(function () {
    var menu = document.getElementById('changeImg'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) document.getElementById("changeImg").src = "img/ac-consig-invertida.png"; // > 0 ou outro valor desejado
        else document.getElementById("changeImg").src = "img/ac-consig.png";
    });
})();

/* SCRIPT DO RANGE */

let $range = document.querySelector('#range'),
$value = document.querySelector('#resultadoTempoReal');
$value2 = document.querySelector('#resultadoTempoReal2');

$range.addEventListener('input', function() {
    $value.textContent = 'R$' + this.value;

    if($value.textContent == 'R$' + 100000 ) {
      $value.textContent = 'Mais de R$100000'
    }

    $value2.textContent = 'R$' + this.value;
    if($value2.textContent == 'R$' + 100000 ) {
      $value2.textContent = 'Mais de R$100000'
    }
    
});

/* MULTI-STEP */

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("sendMessageButton").style.display = "inline";
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("sendMessageButton").style.display = "none";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("contactForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByClassName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    } else {
      y[i].className += " valid";
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}