window.onload=function(){
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      var ipAddress = data.ip;
      var evenSum = 0;
      for (var i = 0; i < ipAddress.length; i++) {
        var digit = parseInt(ipAddress[i]);
        if (!isNaN(digit) && digit % 2 === 0) {
          evenSum += digit;
        }
      }
      document.getElementById('ipAddress').value = ipAddress;
      document.getElementById('evenSum').value = evenSum;
    })
    .catch(error => console.error(error));
    
    //location 
    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationElement = document.getElementById("location");
        locationElement.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
      }
  
      function showError(error) {
        const locationElement = document.getElementById("location");
        locationElement.innerText = `Error: ${error.message}`;
      }
  
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
          const locationElement = document.getElementById("location");
          locationElement.innerText = "Geolocation is not supported by this browser.";
        }

      }
      getLocation();
      
}