import { AiFillAlipayCircle } from "react-icons/ai";
import "./BrandLogo.css";
type BrandLogoProps = {
  name?: string;
  className?: string;
  subtitle?: string;
};

export default function BrandLogo({
  name = "Finansio",
    className = "",
  subtitle = "Network inc",
}: BrandLogoProps) {
  return (
    <div className={`brand-logo ${className}`}>
      <AiFillAlipayCircle className="logo-icon" />
      <div className="brand-logo-name">
        <p>{name}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
