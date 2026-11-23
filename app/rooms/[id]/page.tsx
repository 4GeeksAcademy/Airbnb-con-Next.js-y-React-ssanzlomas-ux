import Link from "next/link";
import { notFound } from "next/navigation";
import RoomDetail from "@/components/RoomDetail";
import { listings } from "@/types/data";

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

const RoomPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const listing = listings.find((item) => item.id === id);
  if (!listing) notFound();
  return <><RoomDetail listing={listing} /><footer className="border-t border-stone-200 bg-stone-50 px-4 py-6 text-center text-xs text-stone-500"><Link href="/catalog" className="hover:underline">Ver más alojamientos</Link></footer></>;
};

export default RoomPage;
