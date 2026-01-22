import type { ReactNode } from "react";
import "./Input.css";

type InputProps = {
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
};

export default function Input({
  type = "text",
  placeholder,
  icon,
}: InputProps) {
  return (
    <div className={`input-wrapper ${icon ? "with-icon" : ""}`}>
      {icon && <span className="input-icon">{icon}</span>}
      <input type={type} className="input" placeholder={placeholder} />
    </div>
  );
}


