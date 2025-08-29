import { FC } from 'react'
import { InfoDiv, InfoSection } from './info'
import { BuildingSVG, BriefcaseSVG } from './svgs'

interface Period {
  from: string;
  to: string;
}

interface Data_Fields {
  _id: string;
  period: Period;
  desc: string;
}

interface Working_Exp_Fields extends Data_Fields {
  job_title: string,
  company: string,
}

interface Academic_Info_Fields extends Data_Fields {
  degree_title: string;
  institute: string;
}

interface Certification_Fields extends Data_Fields {
  course_title: string;
  institute: string;
}

interface Data_Types {
  working_exp: Working_Exp_Fields[];
  academic_info: Academic_Info_Fields[];
  certifications: Certification_Fields[];
}

const About: FC<{}> = async () => {
  const res = await fetch("http://localhost:3000/api/collections/working_exp,academic_info,certifications?multiple=true", {
      cache: "no-store", // optional: prevents data caching in dev
    });
  const data: Data_Types = await res.json();
  console.log('data', data)

  return (
    <div className='h-auto overflow-x-hidden grid grid-flow-row grid-cols-1 pt-3 lg:pt-5 pb-16'>

      <div className='place-items-center my-5'>
        <div className=' grid place-items-center text-4xl font-medium text-transparent
          bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100'>
          <span>Personal Info</span>
        </div>
      </div>

      <InfoSection heading='Working Experience'>
        {
          data['working_exp'].map((item: Working_Exp_Fields) => (
            <InfoDiv
              key={item._id}
              heading={item.job_title}
              subHeading={item.company}
              duration={{from: item.period.from, to: item.period.to}}
              description={item.desc}
              svg={<BriefcaseSVG />}
              link='/skills'
            />
          ))
        }
      </InfoSection>

      <InfoSection heading='Academic Information'>
        {
          data['academic_info'].map((item: Academic_Info_Fields) => (
            <InfoDiv
              key={item._id}
              heading={item.degree_title}
              subHeading={item.institute}
              duration={{ from: item.period.from, to: item.period.to }}
              description={item.desc}
              svg={<BuildingSVG />}  
            />
          ))
        }
      </InfoSection>

      <InfoSection heading='Certifications'>
        {
          data['certifications'].map((item: Certification_Fields)=> (
            <InfoDiv
              key={item._id}
              heading={item.course_title}
              subHeading={item.institute}
              duration={{ from: item.period.from, to: item.period.to }}
              description={item.desc}
              svg={<BuildingSVG />}
            />
          ))
        }
      </InfoSection>
    </div>
  )
}

export default About