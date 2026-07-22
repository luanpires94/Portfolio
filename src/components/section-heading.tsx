"use client";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-accent font-medium">{index}</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">
        {eyebrow}
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}
