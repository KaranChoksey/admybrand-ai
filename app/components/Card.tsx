// app/components/Card.tsx
import { cn } from "@/lib/utils";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
};

export default function Card({ title, children, className, footer }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl shadow-lg bg-white/70 backdrop-blur-md border border-gray-100 p-6 transition-transform hover:scale-[1.02] hover:shadow-xl",
        className
      )}
    >
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className="mb-4">{children}</div>
      {footer && <div className="pt-4 border-t border-gray-200">{footer}</div>}
    </div>
  );
}
