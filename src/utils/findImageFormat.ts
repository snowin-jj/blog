import fs from 'node:fs';

const imageFormats = [
  'jpg',
  'jpeg',
  'png',
  'webp',
  'avif',
  'tiff',
  'tif',
  'gif',
  'svg',
];

const imagePath = (filename: string): URL => {
  if (import.meta.env.PROD) {
    return new URL(`./images/${filename}`, import.meta.url);
  }

  return new URL(`../../public/images/${filename}`, import.meta.url);
};

export const foundImageFormat = (slug: string) => {
  return imageFormats.find((format: string): boolean => {
    try {
      fs.accessSync(imagePath(`${slug}.${format}`));
      return true;
    } catch (e) {
      return false;
    }
  });
};
