import { FC, ReactNode } from "react"

const MainSVG = ({ d }: { d: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 16 16">
    <path fill="currentColor" fillRule="evenodd" d={d} />
  </svg>
)

const EnvelopeSVG = () => (
  <MainSVG
    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"
  />
)

const PhoneSVG = () => (
  <MainSVG
    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42a18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
  />
)

const GitHubSVG = () => (
  <MainSVG 
    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
  />
)

const LinkedInSVG = () => (
  <MainSVG
    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
  />
)



const ContactDetail = ({
  Icon,
  title,
  text,
  link,
}: {
  Icon: ReactNode;
  title: string;
  text?: string | string[];
  link?: string;
}) => (
  <div className="grid xs:grid-cols-1 sm:grid-cols-[min-content_auto] gap-4 text-2xl">

    <span className="font-light tracking-wider text-nowrap capitalize text-blue-gray-200">
      <div className="flex items-center gap-3">
        <span className="inline-block">{ Icon }</span>
        {title}:
      </div>
    </span>

    <div className="font-light tracking-wide w-full max-w-[60vw] break-all whitespace-pre-wrap text-light-blue-100">
      {text &&
        (Array.isArray(text) ? (
          text.map((item, index) => (
            <span key={index}>
              {item}
              {index !== text.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))
        ) : (
          <span>{text}</span>
        ))}

      {link && (
        <a
          href={link}
          target="_blank"
          className="hover:underline hover:text-blue-400"
        >
          {link}
        </a>
      )}
    </div>
  </div>
);


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