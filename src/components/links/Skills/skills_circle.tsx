import { FC } from "react";

const sizeClasses: Record<number, string> = {
  10: 'size-10',
  16: 'size-16',
  20: 'size-20',
  24: 'size-24',
  28: 'size-28',
  32: 'size-32',
  40: 'size-40',
};

interface SkillCircleType {
  skillName?: string;
  size?: 10 | 16 | 20 | 24 | 28 |32 | 40;
  verticalPlacement?: 'top' | 'center' | 'bottom';
  horizontalPlacement?: 'left' | 'center' | 'right';
}


export const SkillCircle: FC<SkillCircleType> = ({skillName='.', size=10, verticalPlacement='top', horizontalPlacement='left'}) => {
  let verticalPlacementClass: string;
  let horizontalPlacementClass: string;

  switch(verticalPlacement) {
    case 'center':
      verticalPlacementClass = 'place-content-center';
      break;
    case 'bottom':
      verticalPlacementClass = 'place-content-end';
      break;
    case 'top':
    default:
      verticalPlacementClass = 'place-content-start';
  }

  switch(horizontalPlacement) {
    case 'center':
      horizontalPlacementClass = 'place-self-center';
      break;
    case 'right':
      horizontalPlacementClass = 'place-self-end';
      break;
    case 'left':
    default:
      horizontalPlacementClass = 'place-self-start';
  }

  return(
    <div className={verticalPlacementClass}>
      <div className={`${horizontalPlacementClass} ${sizeClasses[size]} rounded-full p-[2px]
        bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100`}>
        <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center text-md cursor-default">
          {skillName}
        </div>
      </div>
    </div>
  )
}