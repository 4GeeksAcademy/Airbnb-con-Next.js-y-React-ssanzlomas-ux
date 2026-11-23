"use client";

import Image from "next/image";
import { useState } from "react";

const PhotoGallery = ({ photos, title }: { photos: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);
  const move = (direction: number) => setCurrent((index) => (index + direction + photos.length) % photos.length);
  return <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200 sm:aspect-[16/8]">
    <Image src={photos[current]} alt={`${title}, foto ${current + 1}`} fill priority sizes="100vw" className="object-cover" />
    {photos.length > 1 && <><button aria-label="Foto anterior" onClick={() => move(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow">←</button><button aria-label="Foto siguiente" onClick={() => move(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow">→</button></>}
    <span className="absolute bottom-3 right-3 rounded-md bg-black/65 px-2.5 py-1 text-xs text-white">{current + 1} / {photos.length}</span>
  </div>;
};

export default PhotoGallery;
