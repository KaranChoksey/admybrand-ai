// app/components/Button.tsx
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-semibold transition";
  const styles = variant === "primary"
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-white text-blue-600 border hover:bg-gray-100";
  
  return (
    <button onClick={onClick} className={cn(base, styles)}>
      {children}
    </button>
  );
}
