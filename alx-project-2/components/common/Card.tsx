// components/common/Card.tsx
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;