import { FC } from "react";

interface NestedListTypes {
  heading: string;
  list?: {title?: string; text?: string}[];
}

export const NestedList: FC<NestedListTypes> = ({heading, list}) => (
  <li className='space-y-2 pb-3'>
    <div>{heading}:</div>
    <ul className='list-[square] list-outside ml-7 mr-9 mt-1 space-y-2 text-justify text-sm text-blue-50/75'>
      {list?.map((item, index) => (
        <li key={index}>
          <div className='flex flex-row gap-2'>
            {item.title && <span className='font-medium'>{item.title}:</span>}
            <span className='inline-block font-light break-words'>{item?.text}</span>
          </div>
        </li>
      ))}
    </ul>
  </li>
)