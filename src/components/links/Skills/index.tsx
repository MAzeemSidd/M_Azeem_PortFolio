import { FC } from 'react'
import { NestedList } from './nested_list'
import { SkillsBox, SkillsBoxCategory, SkillsBoxCategoryDivider } from './skills_box'

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

      <div className='grid grid-flow-row grid-cols-2 gap-x-5'>

        <div className='relative grid grid-flow-row grid-cols-1 gap-6'>

          {/* <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[6px] w-[50%] bg-light-blue-300 rounded-full blur-md opacity-80' /> */}

          <div className='relative z-10 grid grid-flow-row grid-cols-1 gap-3'>
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
                heading='Programming Languages'
                list={[
                  {text: 'Javascript'},
                  {text: 'Python'},
                ]}
              />
              <NestedList
                heading='Frontend Development'
                list={[
                  {title: 'ReactJS', text: 'Primary expertise in React'},
                  {title: 'Styling', text: 'Tailwind CSS, Bootstrap and other UI libraries'},
                  {title: 'Core Web', text: 'JavaScript (ES6+), HTML5, CSS3'},
                ]}
              />
              <NestedList
                heading='Backend & Databases (Basic Knowledge)'
                list={[
                  {title: 'Backend', text: 'Academic project experience in Node.js, Express.js'},
                  {title: 'RDBM', text: 'Knowledge of Rational Database specially MySQL'},
                  {title: 'NoSQL', text: 'Hands-on experience of MongoDB in my FYP.'},
                ]}
              />
              <NestedList
                heading='Tools & DevOps (Familiarity)'
                list={[
                  {title: 'Version Control', text: 'Git, GitHub'},
                  {title: 'Containerization', text: 'containerization knowledge and hands-on practices with Docker'},
                  {title: 'Command-line', text: 'Knowledge of Linux CLI commands.'},
                ]}
              />
            </ul>

          </div>

        </div>

        <div className='pl-0 overflow-hidden w-full'>

          <SkillsBoxCategory>
            <SkillsBox name='JavaScript' />
            <SkillsBox name='Python' />
          </SkillsBoxCategory>

          <SkillsBoxCategoryDivider />

          <SkillsBoxCategory>
            <SkillsBox name='NextJS' />
            <SkillsBox name='ReactJS' />
            <SkillsBox name='Redux' />
            <SkillsBox name='React NativeJS' />
          </SkillsBoxCategory>

          <SkillsBoxCategoryDivider />

          <SkillsBoxCategory>
            <SkillsBox name='NodeJS' />
            <SkillsBox name='ExpressJS' />
            <SkillsBox name='GraphQL' />
          </SkillsBoxCategory>

          <SkillsBoxCategoryDivider />

          <SkillsBoxCategory>
            <SkillsBox name='MySQL' />
            <SkillsBox name='MongoDB' />
          </SkillsBoxCategory>

          <SkillsBoxCategoryDivider />

          <SkillsBoxCategory>
            <SkillsBox name='GIT' />
            <SkillsBox name='Linux CLI' />
            <SkillsBox name='Docker' />
            <SkillsBox name='jenkins' />
          </SkillsBoxCategory>
        
        </div>
        {/* <div className='grid grid-flow-row grid-cols-3'> */}
          {/* <SkillCircle skillName='Python' size={20} verticalPlacement='center' horizontalPlacement='right' />
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
          <SkillCircle skillName='Docker' size={20} horizontalPlacement='center' /> */}
        {/* </div> */}


      </div>

    </div>
  )
}

export default Skills