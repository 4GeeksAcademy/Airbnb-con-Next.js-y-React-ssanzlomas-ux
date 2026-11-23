import Image from "next/image";

const HostInfo = ({ hostName, yearsHosting, avatarUrl }: { hostName: string; yearsHosting: number; avatarUrl?: string }) => (
  <section className="flex items-center gap-3 border-t border-stone-200 py-5"><div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-stone-200">{avatarUrl ? <Image src={avatarUrl} alt={hostName} fill sizes="48px" className="object-cover" /> : <span className="flex h-full items-center justify-center text-lg font-medium text-stone-600">{hostName.charAt(0)}</span>}</div><div><p className="font-semibold text-stone-900">Alojamiento de {hostName}</p><p className="mt-0.5 text-sm text-stone-500">{yearsHosting} años como anfitrión · Superanfitrión</p></div></section>
);

export default HostInfo;
