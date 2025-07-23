import { FC } from "react"
import { ContactBox } from './contact_detail'

const Contact: FC<{}> = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto lg:h-[calc(100vh-80px)] grid grid-flow-row place-content-center pt-8 pb-14">
        <div className='place-items-center mb-5'>
          <div className=' grid place-items-center text-4xl font-medium text-transparent
            bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100'>
            <span>Contact Us</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 mt-5">
          <ContactBox buttonType='LinkedIn' title='LinkedIn' text='https://www.linkedin.com/in/muhammad-azeem-siddiqui-2a0a53277/' />
          <ContactBox buttonType='GitHub' title='GitHub' text='https://github.com/MAzeemSidd' />
          <ContactBox buttonType='Email' title='Email' text='m.azeemsiddiqui94@gmail.com' />
          <ContactBox buttonType='Cell' title='Cell' text='+92 316 2680990' />
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