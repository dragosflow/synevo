import React from "react";
import { CircleButton } from "./CircleButton";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/20/solid";

interface SectionTitleProps {
  title: string;
  PlusButton: {
    show?: boolean;
    onClick?: () => void;
  };
  ChevronRightButton: {
    show?: boolean;
    onClick?: () => void;
  };
}

export const SectionTitle = ({
  title,
  PlusButton,
  ChevronRightButton,
}: SectionTitleProps) => {
  return (
    <div className='flex px-5  w-full justify-between'>
      <h1 className='text-xl font-bold text-gray-800'>
        <span className='text-synevo-blue'>My </span>
        {title}
      </h1>
      <div>
        {PlusButton && (
          <CircleButton
            onClick={() => PlusButton.onClick}
            icon={<PlusIcon className='w-6 h-6 text-slate-500' />}
          />
        )}
        {ChevronRightButton.show && (
          <CircleButton
            onClick={() => ChevronRightButton.onClick}
            className='ml-4'
            icon={<ChevronRightIcon className='w-6 h-6 text-slate-500' />}
          />
        )}
      </div>
    </div>
  );
};
