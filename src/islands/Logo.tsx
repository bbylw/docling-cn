export default function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Docling"
      width={28}
      height={28}
      className={className}
      decoding="async"
    />
  );
}
