window.onload=function(){
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      let evenSum = 0;
      for (let i = 0; i < ipAddress.length; i++) {
        const digit = parseInt(ipAddress[i]);
        if (!isNaN(digit) && digit % 2 === 0) {
          evenSum += digit;
        }
      }
      document.getElementById('ipAddress').value = ipAddress;
      document.getElementById('evenSum').value = evenSum;
    })
    .catch(error => console.error(error));
}