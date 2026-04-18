import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const color = variant === "light" ? "text-ivory" : "text-foreground";
  return (
    <Link to="/" className={`group inline-flex flex-col items-center leading-none ${color} ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.45em] text-champagne-deep font-medium mb-1">
        Centre de Beauté
      </span>
      <span className="font-serif text-3xl md:text-4xl tracking-wide italic">
        Chez Leyla
      </span>
      <span className="mt-1 h-px w-10 bg-champagne-deep transition-all duration-500 group-hover:w-16" />
    </Link>
  );
};

export default Logo;
