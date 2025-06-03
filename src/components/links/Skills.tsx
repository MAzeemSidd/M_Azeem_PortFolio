import { FC } from 'react'

interface NestedListTypes {
  heading: string;
  list?: {title?: string; text?: string}[];
}

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


const SkillCircle = ({skillName='.', size=10, verticalPlacement='top', horizontalPlacement='left'}: SkillCircleType) => {
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

const NestedList = ({heading, list}: NestedListTypes) => (
  <li>
    <div>{heading}:</div>
    <ul className='list-[square] list-outside ml-7 mr-9 mt-1 space-y-1 text-justify text-sm text-blue-50/75'>
      {list?.map(item => (
        <li>
          {item.title && <span className='font-medium pr-1'>{item.title}:</span>}
          <span className='font-light'>{item?.text}</span>
        </li>
      ))}
    </ul>
  </li>
)

const Skills: FC<{}> = () => {
  return (
    <div className='h-auto min-w-screen py-14 px-28 grid grid-flow-row grid-cols-1 gap-14'>
      
      <div className='text-4xl font-medium place-items-center'>
        <div className=' grid grid-flow-row grid-cols-1 gap-2 place-items-center
          text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100 '>
          <span>Skill &</span>
          <span>Experience</span>
        </div>
      </div>

      <div className='grid grid-flow-row grid-cols-2 '>

        <div className='grid grid-flow-row grid-cols-1 gap-6'>

          <div className='grid grid-flow-row grid-cols-1 gap-3'>
            <div className='text-3xl text-light-blue-200'>Frontend React Developer</div>

            <div className='text-sm text-justify text-blue-50/85'>With 1.5 years of hands-on experience in frontend development, I specialize in building dynamic, high-performance web applications using React.js. My focus is on crafting responsive, user-centric interfaces with modern tools like Tailwind CSS, complemented by UI libraries such as Ant Design, Material UI, and Material Tailwind.</div>
          </div>

          <div className='grid grid-flow-row grid-cols-1 gap-3'>

            <div className='text-xl text-light-blue-100'>Key Contributions & Expertise:</div>

            <ul className='list-disc list-outside ml-7 mr-9 mt-1 space-y-2 text-justify text-sm text-blue-50/85'>
              <li>Developed and maintained three major projects as a React developer, ensuring seamless performance and cross-device compatibility.</li>
              <li>Collaborated with development teams to architect interactive, scalable, and accessible web applications.</li>
              <li>Translated design mockups into reusable, modular React components, optimizing both functionality and aesthetics.</li>
              <li>Advocated for UX improvements, contributing ideas to refine interfaces and elevate user engagement.</li>
            </ul>

          </div>

          <div className='grid grid-flow-row grid-cols-1 gap-3'>

            <div className='text-xl text-light-blue-100'>Technical Expertise:</div>

            <ul className='list-disc list-outside ml-7 mr-9 mt-1 space-y-2 text-justify text-sm text-blue-50/85'>
              <NestedList
                heading='Frontend Development'
                list={[
                  {title: 'ReactJS', text: 'Primary expertise in it'},
                  {title: 'Styling', text: 'Tailwind CSS, Bootstrap and other UI libraries'},
                  {title: 'Core Web', text: 'JavaScript (ES6+), HTML5, CSS3'},
                ]}
              />
              <NestedList
                heading='Backend & Databases (Basic Knowledge)'
                list={[
                  {title: 'Backend', text: 'Node.js, Express.js'},
                  {title: 'SQL', text: 'MySQL'},
                  {title: 'NoSQL', text: 'MongoDB'},
                ]}
              />
              <NestedList
                heading='Programming Languages'
                list={[
                  {text: 'Javascript'},
                  {text: 'Python'},
                ]}
              />
              <NestedList
                heading='Tools & DevOps (Familiarity)'
                list={[
                  {title: 'Version Control', text: 'Git, GitHub'},
                  {title: 'Containerization', text: 'Docker'},
                  {text: 'Linux CLI'},
                ]}
              />
            </ul>

          </div>

        </div>



        <div className='grid grid-flow-row grid-cols-3'>
          <SkillCircle skillName='Python' size={20} verticalPlacement='center' horizontalPlacement='right' />
          <SkillCircle skillName='Java' size={16} horizontalPlacement='center' />
          <SkillCircle skillName='JavaScript' size={28} horizontalPlacement='center' />
          <SkillCircle skillName='HTML' size={16} verticalPlacement='center' horizontalPlacement='right' />
          <SkillCircle skillName='CSS' size={16} horizontalPlacement='center' />
          <SkillCircle skillName='TailwindCSS' size={32} horizontalPlacement='center' />
          <SkillCircle skillName='ReactJS' size={24} horizontalPlacement='center' />
          <SkillCircle skillName='React-NativeJS' size={40} />
          <SkillCircle skillName='Bootstrap' size={28} horizontalPlacement='left' />
          <SkillCircle skillName='NodeJS' size={20} horizontalPlacement='right' />
          <SkillCircle skillName='ExpressJS' size={28} horizontalPlacement='right' />
          <SkillCircle skillName='Redux' size={20} verticalPlacement='bottom' horizontalPlacement='center' />
          <SkillCircle skillName='MySQL' size={20} verticalPlacement='bottom' horizontalPlacement='center' />
          <SkillCircle skillName='MongoDB' size={24} />
          <SkillCircle skillName='GIT' size={16} verticalPlacement='center' />
          <SkillCircle skillName='GitHub' size={20} horizontalPlacement='right' />
          <SkillCircle skillName='Linux CLI' size={24} verticalPlacement='bottom' horizontalPlacement='center' />
          <SkillCircle skillName='Docker' size={20} horizontalPlacement='center' />
        </div>


      </div>

    </div>
  )
}

export default Skills