export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-wine ${className}`}>
      <span className="h-px w-12 bg-current opacity-40" />
      <span className="font-display text-lg leading-none">✦</span>
      <span className="h-px w-12 bg-current opacity-40" />
    </div>
  );
}
