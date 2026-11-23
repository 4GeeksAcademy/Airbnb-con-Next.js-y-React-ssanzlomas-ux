const LoadingState = ({ message = "Buscando alojamientos…" }: { message?: string }) => (
  <div className="flex items-center justify-center gap-3 py-12 text-sm text-stone-500" role="status"><span className="h-5 w-5 animate-spin rounded-full border-2 border-stone-200 border-t-rose-600" />{message}</div>
);

export default LoadingState;
