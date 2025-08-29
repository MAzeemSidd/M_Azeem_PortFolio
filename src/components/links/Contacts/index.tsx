import { FC } from "react"
import { ContactBox } from './client_components'

export interface Contact_Types {
  _id: string;
  title: string;
  text: string;
}

const Contact: FC<{}> = async () => {
  const res = await fetch('http://localhost:3000/api/collections/contact_details', { cache: 'no-store' });
  const data: Contact_Types[] = await res.json();

  return (
    <div className="w-full max-w-[1440px] h-auto lg:h-[calc(100vh-80px)] grid grid-flow-row place-content-center pt-8 pb-14">
        <div className='place-items-center mb-5'>
          <div className=' grid place-items-center text-4xl font-medium text-transparent
            bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100'>
            <span>Contact Us</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 mt-5">
          {
            data.map((item: any) => (
              <ContactBox key={item._id} buttonType={item.title} title={item.title} text={item.text} />
            ))
          }
        </div>
        {/* <div className="max-w-[60vw] w-full space-y-5 pb-20"> */}
            {/* <div className="text-center text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white pb-5">Contact Us</div> */}
          {/* <ContactDetail Icon={<EnvelopeSVG />} title='Email' text='m.azeemsiddiqui94@gmail.com' />
          <ContactDetail Icon={<PhoneSVG />} title='Cell #' text='+92 316 2680990' />
          <ContactDetail Icon={<GitHubSVG />} title='GitHub' link='https://github.com/MAzeemSidd' />
          <ContactDetail Icon={<LinkedInSVG />} title='LinkedIn' link='https://www.linkedin.com/in/muhammad-azeem-siddiqui-2a0a53277/' /> */}
        {/* </div> */}
    </div>
  )
}

export default Contact