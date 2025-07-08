import { FC } from "react"
import { ContactDetail } from './contact_detail'
import { EnvelopeSVG, PhoneSVG, GitHubSVG, LinkedInSVG } from './svgs'

const Contact: FC<{}> = () => {
  return (
    <div className="w-full max-w-[1440px] h-[calc(100vh-80px)] grid grid-flow-row place-content-center">
      <div className="max-w-[60vw] w-full space-y-5 pb-20">
        <div className="text-center text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white pb-5">Contact Us</div>
        <ContactDetail Icon={<EnvelopeSVG />} title='Email' text='m.azeemsiddiqui94@gmail.com' />
        <ContactDetail Icon={<PhoneSVG />} title='Cell #' text='+92 316 2680990' />
        <ContactDetail Icon={<GitHubSVG />} title='GitHub' link='https://github.com/MAzeemSidd' />
        <ContactDetail Icon={<LinkedInSVG />} title='LinkedIn' link='https://www.linkedin.com/in/muhammad-azeem-siddiqui-2a0a53277/' />
      </div>
    </div>
  )
}

export default Contact