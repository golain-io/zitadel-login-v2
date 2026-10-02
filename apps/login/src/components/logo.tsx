type Props = {
  height?: number;
  width?: number;
};

export function Logo({ height = 40, width = 147.5 }: Props) {
  return (
    <span
      aria-label="Golain"
      className="inline-flex items-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
      style={{ height, width }}
    >
      Golain
    </span>
  );
}
