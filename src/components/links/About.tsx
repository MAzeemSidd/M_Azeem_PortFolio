import Link from 'next/link';
import { FC, ReactNode } from 'react'

interface durationType { from: string; to: string; }
interface InfoDivType { heading: string; subHeading: string, duration: durationType, description: string; svg: ReactNode, link?: string }
interface InfoSectionType { children: ReactNode; heading: string}

const InfoDiv: FC<InfoDivType> = ({ heading, subHeading, duration,  description, svg, link }) => (
  <div className='h-auto bg-gradient-to-r from-light-blue-300 to-blue-50 rounded-xl p-[1px]'>
    <div className='bg-[#020618] rounded-xl px-20 py-12 flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <div className='text-4xl inline-block tracking-[.1rem] text-wrap text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100'>{heading}</div>
        <div className='flex flex-row gap-3 items-baseline'>
          <svg className='w-5 h-5 self-center' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">{svg}</svg>
          <div className='text-xl text-light-blue-100 font-light'>{subHeading}</div>
          <div className='text-xs text-blue-50/85'>{`(${duration.from} – ${duration.to})`}</div>
        </div>
      </div>
      <div className='text-sm pt-2 tracking-wide leading-[1.3rem] text-justify font-light'>{description}</div>
      {
        link &&
        <div className='flex justify-end px-5 text-base font-light underline text-light-blue-100'>
          <Link href={link}>{"click for more details >>"}</Link>
        </div>
      }
    </div>
  </div>
)

const InfoSection: FC<InfoSectionType> = ({ children, heading }) => (
  <div className='w-screen px-40 py-10'>
    <div className='text-xl tracking-[.3rem] text-[#6a7282] mb-10'>
      {heading}
    </div>
    <div className='flex flex-col justify-center items-center gap-14 px-10'>
      {children}
    </div>
  </div>
)

const BuildingSVG: FC<{}> = () => (<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M5 6l7-3l7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"></path>)
const BriefcaseSVG: FC<{}> = () => (<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v.01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></g>)

const About: FC<{}> = () => {
  return (
    <div className='h-auto grid grid-flow-row grid-cols-1 w-screen pt-5 pb-16'>
      <InfoSection heading='Working Experience'>
        <InfoDiv
          heading='Reactjs Developer'
          subHeading='Virtuosoft Pvt. Ltd.'
          duration={{from: 'December 2022', to: 'May 2024'}} description='Worked as a Reactjs Developer in a software solution provider company "Virtuosoft Pvt. Ltd." with a working experience of almost one and half years. Worked on three major projects. Skilled in creating responsive applications using Tailwind CSS and with the support of other UI libraries like Ant Design, Material Tailwind, Material UI. The main job was to create new modules, edit the existing one, fixing bugs on frontend side, change any logic if needed, also api documentation must be done using postman so that other developers can understand the apis and lastly, providing the solutions within deadline.'
          svg={<BriefcaseSVG />}
          link='/skills'
        />
      </InfoSection>

      <InfoSection heading='Academic Information'>
        <InfoDiv
          heading='Masters'
          subHeading='NED University of Engineering and Technology'
          duration={{ from: 'January 2025', to: 'Current' }} description={`Currently pursuing my Master's degree in Computer Science and Information Technology (CS & IT) from NED University of Engineering and Technology, starting in Spring 2025. This advanced program allows me to deepen my expertise in cutting-edge technologies, research methodologies, and innovative solutions in the field of computing. With a strong foundation in both theoretical and practical aspects, I aim to enhance my skills in areas like AI, software development, and data science. This academic journey reflects my commitment to continuous learning and professional growth in the ever-evolving tech industry`}
          svg={<BuildingSVG />}  
        />
        <InfoDiv
          heading='Bachelors'
          subHeading='Virtual University of Pakistan'
          duration={{ from: 'April 2016', to: 'April 2023' }} description={`I hold a Bachelor's degree in Software Engineering from Virtual University of Pakistan (2016 – 2023), where I gained a strong foundation in programming, software development, and system design. My coursework and hands-on projects equipped me with expertise in full-stack development, including frontend and backend technologies. For my final year project, I developed a mobile application using React Native, supported by a Node.js / Express.js server and MongoDB database, showcasing my ability to build scalable and efficient solutions. This degree has honed my problem-solving skills and prepared me for real-world software engineering challenges.`}
          svg={<BuildingSVG />}
        />
      </InfoSection>

      <InfoSection heading='Certifications'>
        <InfoDiv
          heading='MERN Stack Development'
          subHeading='UIT University'
          duration={{ from: 'January 2020', to: 'January 2021' }} description={`Hands-on training in React.js, Node.js, Express.js, and MongoDB. Proficient in building dynamic, responsive web applications using modern JavaScript, HTML, and CSS, with a strong focus on frontend development technology React.js. Gained practical experience through a Frontend internship in React.js framework after the certification, where I implemented RESTful API integrations, state management, and UI component libraries. Passionate about writing efficient, scalable code and crafting seamless user experiences.`}
          svg={<BuildingSVG />}  
        />
        {/* <InfoDiv
          heading='DevOps Engineering'
          subHeading='NED University of Engineering and Technology'
          duration={{ from: 'Aug 2024', to: 'Oct 2024' }} description={`I hold a Bachelor's degree in Software Engineering from Virtual University of Pakistan (2016 – 2023), where I gained a strong foundation in programming, software development, and system design. My coursework and hands-on projects equipped me with expertise in full-stack development, including frontend and backend technologies. For my final year project, I developed a mobile application using React Native, supported by a Node.js / Express.js server and MongoDB database, showcasing my ability to build scalable and efficient solutions. This degree has honed my problem-solving skills and prepared me for real-world software engineering challenges.`}
          svg={<BuildingSVG />}
        /> */}
      </InfoSection>
    </div>
  )
}

export default About