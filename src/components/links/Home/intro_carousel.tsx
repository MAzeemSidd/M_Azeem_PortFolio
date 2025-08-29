'use client'

import { Carousel, Card, CardBody } from '@/components/material_tailwind'
import { memo, FC, useMemo } from 'react'
import { Attribute } from './index'

const CustomCarousel = Carousel as any;
const CustomCard = Card as any;
const CustomCardBody = CardBody as any;

interface DescriptionCardProps {
  title: string;
  description: string;
}

const DescriptionCard: FC<DescriptionCardProps> = ({ title, description }) => (
  <CustomCard className='w-auto bg-transparent shadow-none text-center lg:text-justify'>
      <CustomCardBody className='grid grid-cols-1 gap-4 pt-0'>
          <div>
            <div className='inline-block font-normal tracking-[.2rem] text-4xl sm:text-5xl lg:text-6xl whitespace-pre-line text-wrap text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100 py-[.45rem]'>
              {title.replace(" ", "\n")}
            </div>
          </div>
          <div className='text-blue-50/85 text-base font-light'>{description}</div>
      </CustomCardBody>
  </CustomCard>
);


interface intro_carousel_props {
  attributes: Attribute[];
}

const IntroCarousel = memo(({attributes}: intro_carousel_props) => {

  const MemoizedDescriptionCards = useMemo(() => (
    attributes.map((attribute: Attribute) => (
      <DescriptionCard key={attribute._id} title={attribute.title} description={attribute.description} />
    ))
  ), []);

  return(
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
      {MemoizedDescriptionCards}
    </CustomCarousel>
  );
});

DescriptionCard.displayName = "DescriptionCard";
IntroCarousel.displayName = "IntroCarousel";

export default IntroCarousel