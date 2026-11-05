export type DeviceId = 'celular' | 'tableta' | 'consola' | 'computador';

export interface Device {
  id: DeviceId;
  name: string;
  plural: string;
  min: number;
  max: number;
  includes: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const WHATSAPP_NUMBER = '573184214427';
export const WHATSAPP_DISPLAY = '318 421 4427';
export const PHONE_TEL = '+576055677712';
export const PHONE_DISPLAY = '(605) 567 7712';
export const INSTAGRAM_URL =
  'https://www.instagram.com/manolodaza26?igsh=NmZ1eGU5Mjl3cGNi';
export const INSTAGRAM_HANDLE = 'Techno_fix';

export const PRICE_SCALE_MAX = 300000;

export const devices: Device[] = [
  {
    id: 'celular',
    name: 'Celular',
    plural: 'Celulares',
    min: 50000,
    max: 150000,
    includes: 'Limpieza, actualización de software, cambio de batería.',
    image: '/img7.png',
    imageAlt: 'Técnico con guantes reparando la placa de un celular',
    href: '/services/phones',
  },
  {
    id: 'tableta',
    name: 'Tableta',
    plural: 'Tabletas',
    min: 80000,
    max: 200000,
    includes: 'Reparación de pantalla, actualización de software.',
    image: '/img7.png',
    imageAlt: 'Reparación de pantalla de una tableta',
    href: '/services/phones',
  },
  {
    id: 'consola',
    name: 'Consola',
    plural: 'Consolas',
    min: 100000,
    max: 250000,
    includes: 'Reparación de hardware y limpieza, todas las marcas.',
    image: '/img3.png',
    imageAlt: 'Consola de videojuegos abierta durante su mantenimiento',
    href: '/services/consoles',
  },
  {
    id: 'computador',
    name: 'Computador',
    plural: 'Computadores',
    min: 100000,
    max: 300000,
    includes:
      'Limpieza interna, actualización de componentes, solución de problemas.',
    image: '/img6.png',
    imageAlt: 'Manos de un técnico trabajando dentro de un computador',
    href: '/services/computers',
  },
];

export const formatCOP = (n: number) =>
  '$' + n.toLocaleString('es-CO').replace(/,/g, '.');

export const whatsappLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
