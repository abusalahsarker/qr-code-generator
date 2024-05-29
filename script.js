document.getElementById('generateBtn').addEventListener('click', generateQRCode);
document.getElementById('downloadBtn').addEventListener('click', downloadQRCode);

function generateQRCode() {
    const url = document.getElementById('urlInput').value;
    const qrCodeContainer = document.getElementById('qrCode');

    if (url) {
        qrCodeContainer.innerHTML = '';
        QRCode.toCanvas(url, { width: 200, margin: 2 }, function (error, canvas) {
            if (error) console.error(error);
            qrCodeContainer.appendChild(canvas);
            document.getElementById('downloadBtn').style.display = 'block';
        });
    } else {
        alert('Please enter a URL');
    }
}

function downloadQRCode() {
    const qrCodeCanvas = document.querySelector('#qrCode canvas');
    if (qrCodeCanvas) {
        const url = qrCodeCanvas.toDataURL();
        const link = document.createElement('a');
        link.href = url;
        link.download = 'qr_code.png';
        link.click();
    } else {
        alert('Please generate a QR code first');
    }
}
