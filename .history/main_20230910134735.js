function generateQRCode() {
  let website = document.getElementById("website").value;
  if (website) {
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, website);
 
      document.getElementById("qrcode-container").style.display = "block";
  } else {
      alert("Please enter a valid URL");
  }
}

function downloadQRCode() {
  let qrcodeContainer = document.getElementById("qrcode");
  let img = qrcodeContainer.getElementsByTagName('img')[0];
  if (img) {
      let link = document.createElement('a');
      link.href = img.src;
      link.download = 'QRCode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  } else {
      alert("Please generate a QR code first");
  }
}
