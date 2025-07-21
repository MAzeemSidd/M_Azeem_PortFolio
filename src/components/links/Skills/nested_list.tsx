import { FC, memo } from "react";

interface NestedListTypes {
  category: string;
  skills?: {title: string; text?: string}[];
}

export const NestedList: FC<NestedListTypes> = memo(({category, skills}) => (
  <li className='pb-3 flex flex-col justify-start gap-3'>
    <div>{category}:</div>
    <ul className='list-[square] list-outside ml-3 mr-2 md:ml-7 lg:mr-9 space-y-3 text-sm text-blue-50/75'>
      {skills?.map((item, index) => (
        <li key={index}>
          <div className='flex flex-col lg:flex-row gap-1 lg:gap-2'>
            {item.title && <span className='font-medium'>{item.title}:</span>}
            <span className='inline-block font-light break-words text-justify'>{item?.text}</span>
          </div>
        </li>
      ))}
    </ul>
  </li>
));