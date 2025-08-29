'use client'

import { useState } from "react";
import {
  CopiedSVG,
  CopySVG,
  PhoneSVG,
  GitHubSVG,
  LinkedInSVG,
  MailSVG,
  VisitWebsiteSVG,
  SendMailSVG,
  CallingSVG
} from "./svgs";
import { Tooltip } from "@/components/material_tailwind";

type mainButtonTypes = 'Email' | 'Cell' | 'LinkedIn' | 'GitHub';

export interface ContactBoxType {
  buttonType: mainButtonTypes;
  title: mainButtonTypes;
  text: string;
}

export function ContactBox ({ buttonType, title, text }: ContactBoxType) {
  const [textCopied, setTextCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text) // This will copy to clipboard
      .then(() => { // When successfully copied, do the following
        setTextCopied(true);
        setTimeout(() => setTextCopied(false), 4000); // Reset after 2 seconds
      })
      .catch(err => { // When error occured, show on console
        console.error('Failed to copy text: ', err);
      });
  };

  const handleCallClick = () => {
    // Format number for tel: link (remove all non-digit characters)
    const formattedNumber =
      buttonType === 'Cell'
      &&
      text.replace(/\D/g, ''); // '\D' matches all non-digits unlike '\d' which matches digits
    window.location.href = `tel:${formattedNumber}`;
  };

  let MainSVG, linkBtnTitle, LinkBtnSVG, linkBtnTooltip, href;

  switch (buttonType) {
    case 'LinkedIn':
      MainSVG = <div className="size-6"><LinkedInSVG /></div>;
      linkBtnTitle = 'Visit';
      LinkBtnSVG = <div className="size-[11px] lg:size-[15px]"><VisitWebsiteSVG /></div>;
      linkBtnTooltip='Link';
      href = text;
      break;
    case 'GitHub':
      MainSVG = <div className="size-7"><GitHubSVG /></div>;
      linkBtnTitle = 'Visit';
      LinkBtnSVG = <div className="size-[11px] lg:size-[15px]"><VisitWebsiteSVG /></div>;
      linkBtnTooltip='Link';
      href = text;
      break;
    case 'Email':
      MainSVG = <div className="size-7"><MailSVG /></div>;
      linkBtnTitle = 'Send Mail';
      LinkBtnSVG = <div className="size-[11px] lg:size-[15px]"><SendMailSVG /></div>;
      linkBtnTooltip='Mail';
      href = `https://mail.google.com/mail/?view=cm&fs=1&to=${text}`
      break;
    case 'Cell':
      MainSVG = <div className="size-6"><PhoneSVG /></div>;
      linkBtnTitle = 'Dial';
      LinkBtnSVG = <div className="size-[11px] lg:size-[15px]"><CallingSVG /></div>;
      linkBtnTooltip='Call';
      href = undefined;
      break;
  }

  return (
    <div className="w-[270px] sm:w-[320px] lg:w-[370px] h-[180px] lg:h-[150px] relative group">
      <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 size-12 rounded-full ring-1 ring-light-blue-200 text-light-blue-100 bg-[#020618] place-content-center place-items-center">
        { MainSVG }
      </div>
      <div className="absolute z-0 w-full h-[85%] bg-gradient-to-r from-light-blue-300 to-blue-50 bottom-0 rounded-lg p-[1px]">
        <div className="bg-blue-gray-900 w-full h-full rounded-lg place-content-end place-items-center space-y-10">
            <div className="h-[85%] lg:h-[80%] pt-2 pb-5 flex flex-col justify-between items-center gap-2">
              <div className="text-sm tracking-wider">{title}</div>
              <div className="flex flex-col items-center gap-2 lg:gap-0 lg:flex-row">
                <div className="bg-gray-900 p-3 text-xs rounded-md lg:rounded-none lg:rounded-s-md text-center w-[200px] sm:w-[250px] md:w-[250px] lg:w-[250px] truncate">{text}</div>
                <div className="flex flex-row gap-3 lg:gap-0">
                  <Tooltip className='py-1 rounded-md text-light-blue-100 bg-[#030712]' content="Copy">
                    <button
                      onClick={handleCopy}
                      className={`${textCopied ? 'bg-light-blue-300' : 'bg-white/20 hover:bg-white/30 active:bg-white/40'}
                        w-[74px] lg:w-auto max-w-[74px] py-1.5 lg:py-3 px-2 lg:px-3 flex flex-row items-center justify-center gap-1 lg:gap-0 lg:block lg:place-content-center cursor-pointer rounded-md lg:rounded-none`}
                    >
                      <div className="lg:hidden text-xs">{textCopied ? 'Copied' : 'Copy'}</div>
                      <div className={`${textCopied ? 'hidden' : 'block'} size-[11px] lg:size-[15px]`}><CopySVG /></div>
                      <div className={`${textCopied ? 'block' : 'hidden'} size-[11px] lg:size-[15px]`}><CopiedSVG /></div>
                    </button>
                  </Tooltip>
                  <Tooltip content={linkBtnTooltip}>
                    <a
                      {...(buttonType !== 'Cell' ?
                        { 
                          href: href,
                          target: "_blank",
                          rel: "noopener noreferrer", // Always include this with target="_blank"
                          onClick: (e) => {
                            e.preventDefault();
                            window.open(href, '_blank');
                          }
                        } 
                        :
                        { 
                          onClick: handleCallClick,
                          role: "button", // For accessibility when not using <button>
                          tabIndex: 0 // Make it focusable
                        }
                      )}
                      className="bg-white/20 hover:bg-white/30 active:bg-white/40 py-1.5 lg:py-3 px-2 lg:px-3 flex flex-row items-center gap-1 lg:gap-0 lg:block lg:place-content-center cursor-pointer rounded-md lg:rounded-none lg:rounded-e-md"
                    >
                      <div className="lg:hidden text-xs">{ linkBtnTitle }</div>
                      { LinkBtnSVG }
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
