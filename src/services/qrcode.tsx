import React from 'react';
import {QRCodeCanvas} from 'qrcode.react'

    interface QRCodeGeneratorProps {
        value: string; 
        size?: number; 
        level?: 'L' | 'M' | 'Q' | 'H'; 
    }

    export default function gerarQRCode ({value, size=128, level='L'}: QRCodeGeneratorProps) {
        return (
        <QRCodeCanvas
            value={value}
            size={size}
            level={level}
            className='rounded-sm'
            // bgColor=''
            // fgColor=''
        />
        );
    }