import { AiOutlineCheck } from "react-icons/ai";
import "./InfoCard.css";

type InfoCardProps = {
  title: string;
  price: string;
  description: string;
  returnValue: string;
};

export default function InfoCard({
  title,
  price,
  description,
  returnValue,
}: InfoCardProps) {
  return (
    <div className="info-card">
      <div className="info-card-header">
        <p className="info-card-title">{title}</p>
        <div className="info-card-icon">
          <AiOutlineCheck />
        </div>
      </div>

      <div className="info-card-content">
        <p className="info-card-price">{price}</p>
        <p className="info-card-desc">{description}</p>
      </div>

      <div className="info-card-divider" />

      <div className="info-card-footer">
        <p className="info-card-footer-text">Return</p>
        <p className="info-card-footer-value">{returnValue}</p>
      </div>
    </div>
  );
}
