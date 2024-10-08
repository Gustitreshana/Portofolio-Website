interface CardProps {
  title: string;
  description: string;
  date: string;
}

const Card = ({ title, description, date }: CardProps) => {
  return (
    <div className="border-2 border-emerald-600 rounded-lg p-4 flex justify-center flex-col gap-2 transform transition-transform duration-300 hover:scale-105">
      <div>
        <h2 className="text-2xl font-bold text-emerald-600">{date}</h2>
      </div>
      <div>
        <h3 className="text-xl font-bold text-yellow-600">{title}</h3>
        <p className="text-sm text-justify text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;
