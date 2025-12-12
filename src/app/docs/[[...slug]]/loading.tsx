export default function Loading() {
  return (
    <div className="animate-pulse space-y-4 p-8">
      <div className="h-8 bg-fd-muted rounded w-1/3" />
      <div className="h-4 bg-fd-muted rounded w-2/3" />
      <div className="h-4 bg-fd-muted rounded w-1/2" />
      <div className="mt-8 space-y-3">
        <div className="h-4 bg-fd-muted rounded w-full" />
        <div className="h-4 bg-fd-muted rounded w-5/6" />
        <div className="h-4 bg-fd-muted rounded w-4/5" />
      </div>
    </div>
  );
}
