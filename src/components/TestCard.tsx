import React from "react";

interface TestCardProps {
  title: string;
  name: string;
}

const Button = ({
  title,
  outline,
  className,
  onClick,
}: {
  title: string;
  outline?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={`${className} mt-10  py-1 rounded-full text-sm font-normal ${
        outline
          ? "border-[1px] border-synevo-blue text-synevo-blue"
          : "bg-synevo-blue text-white"
      }`}
    >
      {title}
    </button>
  );
};

export const TestCard = ({ title, name }: TestCardProps) => {
  return (
    <div className='bg-white w-64 min-w-64 rounded-xl p-5 ml-5 mt-5'>
      <h1 className='text-sm font-semibold mb-2'>{title}</h1>
      <p className='text-xs font-semibold text-synevo-blue'> {name}</p>
      <div className='flex w-full justify-between'>
        <Button title='Ready' className='-ml-1 px-6' />
        <Button title='See results' className='px-3' outline />
      </div>
    </div>
  );
};
