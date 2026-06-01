export default function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-200/10 bg-amber-300/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-200/10 blur-3xl rounded-full" />

    </div>
  );
}