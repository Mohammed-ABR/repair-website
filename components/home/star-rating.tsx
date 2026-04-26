const sizes = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
} as const;

export function StarRating({
  rating,
  size = "md",
}: {
  rating: number;
  size?: keyof typeof sizes;
}) {
  const full = Math.min(5, Math.max(0, Math.round(rating)));
  const dim = sizes[size];
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${full} van 5 sterren`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`${dim} ${i < full ? "text-amber-400" : "text-foreground/15"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
