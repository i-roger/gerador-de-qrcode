'use client';
import React, { useRef, useState } from 'react';

import GerarQRCode from '@/services/qrcode';

export default function Home() {
  const [link, setLink] = useState('');

  const qrCodeRef = useRef(null);
  
  function Download(qrCodeRef:any) {
    if(link) {
      const canvas = qrCodeRef.current.querySelector('canvas');
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('O campo não pode estar vazio!')
    }
  };

  return (
    <div className="font-sans flex flex-col items-center gap-10">
      <div className="mt-20">
        <h1 className="text-2xl">Gerador de QRCode</h1>
      </div>
      <div className="flex flex-col w-100">
        <p className="">Digite aqui:</p>
        <input autoFocus={false}  className="p-1 border focus-visible:outline-none border-white rounded-sm" onChange={(e) => setLink(e.target.value)} value={link}/>
      </div>

      <div className="flex flex-col justify-center items-center">
        {link ? (
          <div ref={qrCodeRef}>
            <GerarQRCode value={link} size={256}/>
          </div>
          ) : (<div className="w-[256px] h-[256px] bg-[#232323] rounded-sm"></div>

          )}
      </div>

          <a className="bg-green-600 hover:bg-green-500 active:bg-green-600/50 p-2 rounded-sm cursor-pointer" onClick={Download}>Salvar QRCode!</a>
          <div className='flex items-center justify-center m-2'>
            <div className='p-4 text-justify bg-[#232323] rounded-sm'>
              <p>Vantagens do uso de códigos QR: <br/>
  Rapidez: Acesso rápido à informação sem a necessidade de digitar URLs longos. <br/>
  Versatilidade: Pode ser usado para diversos tipos de informação e em diferentes contextos. <br/>
  Facilidade de uso: Qualquer pessoa com um smartphone pode ler um código QR. <br/>
  Conveniência: Permite acessar informações de forma rápida e prática. <br/>
  Custo: A criação de um código QR geralmente é gratuita e fácil de fazer. </p>
            </div>
          </div>
    </div>
  );
}
