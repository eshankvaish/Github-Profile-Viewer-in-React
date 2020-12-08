import React from 'react';
import Image from './Image';

export default {
    title: 'Image',
    component: Image,
};

const img = {
    src: '/favicon.ico',
    alt: 'Favicon Image',
};

export const NormalImage = () => <Image {...img} />;
export const CicularImage = () => <Image {...img} design="circle" />;
