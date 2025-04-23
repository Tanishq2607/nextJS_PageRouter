import Image from "next/image";
import { CardProps } from "../types/user";

const Card = ({ name, Images }: CardProps) => {
  return (
    <div className="p-6 border-2 border-indigo-100 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center bg-white relative overflow-hidden">
      <div className="mb-4 p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
        <Image 
          src={Images} 
          alt={name} 
          width={100} 
          height={100} 
          className="rounded-full object-cover border-2 border-white"
        />
      </div>
      <p className="text-xl font-semibold text-gray-800">{name}</p>
    </div>
  );
};

export default Card;