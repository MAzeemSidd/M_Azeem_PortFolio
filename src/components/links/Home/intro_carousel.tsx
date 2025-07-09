'use client'

import { Carousel, Card, CardBody } from '@/components/material_tailwind'
import { memo, useMemo, FC } from 'react'

const CustomCarousel = Carousel as any;
const CustomCard = Card as any;
const CustomCardBody = CardBody as any;

interface DescriptionCardProps {
  title: string;
  description: string;
}

const Description_Card: FC<DescriptionCardProps> = memo(({ title, description }) => (
  <CustomCard className='my-0 py-0 w-auto mx-0 bg-transparent shadow-none text-justify'>
      <CustomCardBody className='grid grid-cols-1 gap-4 pt-0'>
          <div>
            <div className='inline-block font-normal tracking-[.2rem] text-6xl text-wrap text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100 py-[.45rem]' style={{ whiteSpace: 'pre-line' }}>{title}</div>
          </div>
          <div className='text-blue-50/85 text-base font-light'>{description}</div>
      </CustomCardBody>
  </CustomCard>
));

interface Skill {
  id: number;
  title: string;
  description: string;
}

const IntroCarousel: FC<{}> = memo(() => {
  const skills: Skill[] = useMemo(() => [
    {
        id: 1,
        title: "Software\nEngineer",
        description: 'Holding a Bachelor of Science degree in Software Engineering, with a solid background in system design, programming, and software development. Also have problem solving ability with the knowledge of modern technologies passionates me to create user centric systems.'
    },
    {
        id: 2,
        title: "Frontend\nDeveloper",
        description: 'Frontend developer with an expertise of creating user-friendly, responsive, and dynamic web applications. Familiarity with most of the modern Javascript frameworks and libraries thats allows me to provide advanced solutions.'
    },
    {
        id: 3,
        title: "Reactjs\nDeveloper",
        description: 'Hands-on experience in designing and developing web applications. Proficient in state management with Redux or Context API, integrating "RESTful APIs, building reusable components, fixing the bugs and optimizing front-end performance.'
    },
    {
        id: 4,
        title: "Nextjs\nDeveloper",
        description: 'Proficient in leveraging Next.js features like server-side rendering (SSR), static site generation (SSG), and API routes to deliver high-performance solutions. Excited to use my expertise for cutting-edge technology to create impactful user experience.'
    }
  ], []);

  return (
    <CustomCarousel
        className="shadow-none"
        navigation={() => null}
        prevArrow={() => null}
        nextArrow={() => null}
        autoplay={true}
        autoplayDelay={7000}
        loop={true}
        transition={{type: 'tween', duration: 0.9}}
    >
        {skills.map(skill => (
            <Description_Card key={skill.id} title={skill.title} description={skill.description} />
        ))}
    </CustomCarousel>
  )
})

Description_Card.displayName = "Description_Card";
IntroCarousel.displayName = "IntroCarousel";

export default IntroCarousel