import { FC } from "react"
import { ContactDetail } from './contact_detail'
import { EnvelopeSVG, PhoneSVG, GitHubSVG, LinkedInSVG, CopySVG, MailSVG, GotoSVG } from './svgs'

const ContactBox = () => (
  <div className="w-[300px] h-[180px] lg:h-[150px] relative group">
    <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 size-12 rounded-full ring-1 ring-light-blue-200 text-light-blue-100 bg-[#020618] place-content-center place-items-center">
      <MailSVG />
    </div>
    <div className="absolute z-0 w-full h-[85%] bg-gradient-to-r from-light-blue-300 to-blue-50 bottom-0 rounded-lg p-[1px]">
      <div className="bg-blue-gray-900 w-full h-full rounded-lg place-content-end place-items-center space-y-10">
          <div className="h-[85%] lg:h-[80%] pt-2 pb-5 flex flex-col justify-between items-center gap-2">
            <div className="text-sm tracking-wider">Email</div>
            <div className="flex flex-col items-center gap-2 lg:gap-0 lg:flex-row">
              <div className="bg-gray-900 p-3 text-xs rounded-md lg:rounded-none lg:rounded-s-md">m.azeemsiddiqui94@gmail.com</div>
              <div className="flex flex-row gap-3 lg:gap-0">
                <div className="bg-white/20 hover:bg-white/30 active:bg-white/40 py-2 lg:py-3 px-2.5 flex flex-row items-center gap-1 lg:gap-0 lg:block lg:place-content-center cursor-pointer rounded-md lg:rounded-none">
                  <div className="lg:hidden text-sm">Copy</div>
                  <CopySVG width={15} height={15} />
                </div>
                <div className="bg-white/20 hover:bg-white/30 active:bg-white/40 py-2 lg:py-3 px-2.5 flex flex-row items-center gap-1 lg:gap-0 lg:block lg:place-content-center cursor-pointer rounded-md lg:rounded-none lg:rounded-e-md">
                  <div className="lg:hidden text-sm">Mail to</div>
                  <GotoSVG width={15} height={15} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
)

const Contact: FC<{}> = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto lg:h-[calc(100vh-80px)] grid grid-flow-row place-content-center">
        <div className='place-items-center my-8'>
          <div className=' grid place-items-center text-4xl font-medium text-transparent
            bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100'>
            <span>Contact</span>
          </div>
        </div>

        <ContactBox />

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