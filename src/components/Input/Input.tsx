import type { ReactNode } from "react";
import "./Input.css";

type InputProps = {
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  borderless?: boolean;
};

export default function Input({
  type = "text",
  borderless = false,
  placeholder,
  icon,
}: InputProps) {
  return (
    <div
      className={`input-wrapper ${icon ? "with-icon" : ""} ${borderless ? "borderless" : ""}`}
    >
      {icon && <span className="input-icon">{icon}</span>}
      <input type={type} className="input-field" placeholder={placeholder} />
    </div>
  );
}
