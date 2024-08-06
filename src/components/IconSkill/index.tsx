import Image from "next/image";

interface IconSkillProps {
  title: string;
  image: string;
}

const IconSkill = ({ title, image }: IconSkillProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div>
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <div>
        <h4 className="text-xl font-bold">{title}</h4>
      </div>
    </div>
  );
};

export default IconSkill;
