import { FC } from 'react'
import { InfoDiv, InfoSection } from './info'
import { BuildingSVG, BriefcaseSVG } from './svgs'

const About: FC<{}> = () => {
  return (
    <div className='h-auto overflow-x-hidden grid grid-flow-row grid-cols-1 pt-3 lg:pt-5 pb-16'>
      <InfoSection heading='Working Experience'>
        <InfoDiv
          heading='Reactjs Developer'
          subHeading='Virtuosoft Pvt. Ltd.'
          duration={{from: 'December 2022', to: 'May 2024'}}
          description='Worked as a Reactjs Developer in a software solution provider company "Virtuosoft Pvt. Ltd." with a working experience of almost one and half years. Worked on three major projects. Skilled in creating responsive applications using Tailwind CSS and with the support of other UI libraries like Ant Design, Material Tailwind, Material UI. The main job was to create new modules, edit the existing one, fixing bugs on frontend side, change any logic if needed, also api documentation must be done using postman so that other developers can understand the apis and lastly, providing the solutions within deadline.'
          svg={<BriefcaseSVG />}
          link='/skills'
        />
      </InfoSection>

      <InfoSection heading='Academic Information'>
        <InfoDiv
          heading='Masters - Computer Science'
          subHeading='NED University of Engineering and Technology'
          duration={{ from: 'January 2025', to: 'Current' }}
          description={`Currently pursuing my Master's degree in Computer Science and Information Technology (CS & IT) from NED University of Engineering and Technology, starting in Spring 2025. This advanced program allows me to deepen my expertise in cutting-edge technologies, research methodologies, and innovative solutions in the field of computing. With a strong foundation in both theoretical and practical aspects, I aim to enhance my skills in areas like AI, software development, and data science. This academic journey reflects my commitment to continuous learning and professional growth in the ever-evolving tech industry`}
          svg={<BuildingSVG />}  
        />
        <InfoDiv
          heading='Bachelors - Software Engineering'
          subHeading='Virtual University of Pakistan'
          duration={{ from: 'April 2016', to: 'April 2023' }}
          description={`I hold a Bachelor's degree in Software Engineering from Virtual University of Pakistan (2016 – 2023), where I gained a strong foundation in programming, software development, and system design. My coursework and hands-on projects equipped me with expertise in full-stack development, including frontend and backend technologies. For my final year project, I developed a mobile application using React Native, supported by a Node.js / Express.js server and MongoDB database, showcasing my ability to build scalable and efficient solutions. This degree has honed my problem-solving skills and prepared me for real-world software engineering challenges.`}
          svg={<BuildingSVG />}
        />
      </InfoSection>

      <InfoSection heading='Certifications'>
        <InfoDiv
          heading='MERN Stack Development'
          subHeading='UIT University'
          duration={{ from: 'January 2020', to: 'January 2021' }}
          description={`Hands-on training in React.js, Node.js, Express.js, and MongoDB. Proficient in building dynamic, responsive web applications using modern JavaScript, HTML, and CSS, with a strong focus on frontend development technology React.js. Gained practical experience through a Frontend internship in React.js framework after the certification, where I implemented RESTful API integrations, state management, and UI component libraries. Passionate about writing efficient, scalable code and crafting seamless user experiences.`}
          svg={<BuildingSVG />}  
        />
        <InfoDiv
          heading='DevOps Engineering'
          subHeading='NED University of Engineering and Technology'
          duration={{ from: 'Aug 2024', to: 'Oct 2024' }}
          description={`I hold a Bachelor's degree in Software Engineering from Virtual University of Pakistan (2016 – 2023), where I gained a strong foundation in programming, software development, and system design. My coursework and hands-on projects equipped me with expertise in full-stack development, including frontend and backend technologies. For my final year project, I developed a mobile application using React Native, supported by a Node.js / Express.js server and MongoDB database, showcasing my ability to build scalable and efficient solutions. This degree has honed my problem-solving skills and prepared me for real-world software engineering challenges.`}
          svg={<BuildingSVG />}
        />
      </InfoSection>
    </div>
  )
}

export default About