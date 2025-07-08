import { FC, ReactNode } from "react";

interface ContactDetailTypes {
  Icon: ReactNode;
  title: string;
  text?: string | string[];
  link?: string;
}

export const ContactDetail: FC<ContactDetailTypes> = ({ Icon, title, text, link }) => (
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
