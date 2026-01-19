// Loading spinner component
export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-secondary border-t-transparent" />
    </div>
  );
}