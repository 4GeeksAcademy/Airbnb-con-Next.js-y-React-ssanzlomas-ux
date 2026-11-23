"use client";

import { useState } from "react";

const BookingCard = ({ pricePerNight, minGuests, maxGuests }: { pricePerNight: number; minGuests: number; maxGuests: number }) => {
  const [guests, setGuests] = useState(minGuests);
  return <section className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-between gap-2 border-t border-stone-200 bg-white p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] sm:static sm:mt-5 sm:rounded-2xl sm:border sm:p-4 sm:shadow-sm">
    <p className="shrink-0 text-sm text-stone-900"><strong className="text-base">${pricePerNight}</strong><span className="text-stone-600"> / noche</span></p>
    <div className="flex items-center gap-1 rounded-lg border border-stone-200 px-1.5 py-1"><button aria-label="Quitar huésped" disabled={guests <= minGuests} onClick={() => setGuests((value) => Math.max(minGuests, value - 1))} className="h-7 w-7 rounded-full text-lg disabled:text-stone-300">−</button><span className="min-w-5 text-center text-xs">{guests}</span><button aria-label="Agregar huésped" disabled={guests >= maxGuests} onClick={() => setGuests((value) => Math.min(maxGuests, value + 1))} className="h-7 w-7 rounded-full text-lg disabled:text-stone-300">+</button></div>
    <button onClick={() => alert("¡Listo! Continúa con tu reserva.")} className="rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700">Reservar</button>
  </section>;
};

export default BookingCard;
