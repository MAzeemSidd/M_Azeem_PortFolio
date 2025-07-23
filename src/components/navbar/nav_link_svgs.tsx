import { FC, ReactNode } from "react"

interface MainSVGType { children: ReactNode; size: number }

const MainSVG: FC<MainSVGType> = ({ children, size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            { children }
        </g>
    </svg>
)

const HomeSVG = () => (
    <>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </>
)

const AboutSVG = () => (
    <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" />
    </>
)

const SkillsSVG = () => (
    <>
        {/* <path d="m13.69 12.479l1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88" />
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /> */}
        <path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8" />
		<path d="M17.5 16a3.5 3.5 0 0 0 0-7H17" />
		<path d="M19 9.3V6.5a3.5 3.5 0 0 0-7 0M6.5 16a3.5 3.5 0 0 1 0-7H7" />
		<path d="M5 9.3V6.5a3.5 3.5 0 0 1 7 0v10" />
    </>
)

const ProjectSVG = () => (
    <>
        <path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
        <rect width="10" height="7" x="12" y="13" rx="2" />
    </>
)

const ContactSVG = () => (
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" />
)

type SVGType = 'home' | 'about' | 'skills' | 'project' | 'contact';

interface NavLinkSVGType { type: SVGType; size?: number }

export const NavLinkSVG: FC<NavLinkSVGType> = ({ type, size=18 }) => {
    let SVGComponent: ReactNode

    switch (type) {
        case 'home':
            SVGComponent = <HomeSVG />;
            break;
        case 'about':
            SVGComponent = <AboutSVG />;
            break;
        case 'skills':
            SVGComponent = <SkillsSVG />;
            break;
        case 'project':
            SVGComponent = <ProjectSVG />;
            break;
        case 'contact':
            SVGComponent = <ContactSVG />;
            break;
    }
    
    return (
        <MainSVG size={size} >
            { SVGComponent }
        </MainSVG>
    )
}

