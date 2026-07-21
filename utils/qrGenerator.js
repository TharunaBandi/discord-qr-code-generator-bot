const QRCode = require('qrcode');

async function generateQR(data, width) {
    if (!data) {
        throw new Error('A URL must be provided.');
    }

    return await QRCode.toBuffer(data, {
        width: width || 200,
        margin: 2
    });
}

module.exports = {
    generateQR
};