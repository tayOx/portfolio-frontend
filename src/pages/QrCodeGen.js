import React from 'react';
import GenQr from '../components/Qrcode.js';

const QrCode = () => {
  return (
    <div>
      <GenQr />
      <form method="get" action="/howto/qr">
            <button type="submit" class="how">How to?</button>
        </form>
    </div>
  );
};

export default QrCode;