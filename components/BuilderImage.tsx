"use server"

import Image, { ImageLoaderProps } from 'next/image';

interface BuilderImageProps extends ImageLoaderProps {
  width?: number;
  height?: number;
  quality?: number | string;
  className?: string;
}

const builderLoader = ({ src, width, height, quality, className }: BuilderImageProps) => {
  return `${src}?width=${width}&quality=${quality || 75}&height=${height}`;
};

const BuilderImage = (props: BuilderImageProps) => {
  return <Image loader={builderLoader} {...props} />;
};

export default BuilderImage;
