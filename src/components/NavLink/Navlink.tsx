import "./Navlink.css";
type NavLinkProps = {
  label: string;
  active?: boolean;
};

export default function NavLink({ label, active }: NavLinkProps) {
  return <span className={`nav-link ${active ? "active" : ""}`}>{label}</span>;
}
