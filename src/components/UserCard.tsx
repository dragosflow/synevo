import { CircleButton } from "./CircleButton";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export const UserCard = ({
  name,
  photoSrc,
}: {
  name: string;
  photoSrc: string;
}) => {
  return (
    <div className='flex pl-6 mt-3 w-full'>
      <img src={photoSrc} alt='user' className='w-12 h-12' />
      <div className='ml-2 my-auto w-full'>
        <p className='font-semibold text-lg  tracking-wide'>
          Latest Results for
        </p>
        <p className='font-medium -mt-2 text-sm text-synevo-blue'>{name}</p>
      </div>
      <div className='w-max justify-end my-auto pr-6'>
        <CircleButton
          icon={<ChevronRightIcon className='w-6 h-6 text-gray-500' />}
        />
      </div>
    </div>
  );
};
