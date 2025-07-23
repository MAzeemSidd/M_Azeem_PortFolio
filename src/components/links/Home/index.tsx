import { FC } from "react";
import '@/app/globals.css'
import IntroCarousel from "./intro_carousel"
import { Contact_Btn, Site_Link_Circle, Site_Link_Path } from './link_buttons'
import { Site_Link_Btn } from "./site_link_btn";
import { DisplayPicture } from './display_picture'

const Home: FC<{}> = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-2 h-auto lg:h-[calc(100vh-80px)] py-10'>

        {/* left column with carousel */}
        <div className='w-full lg:col-span-3 lg:row-span-2 lg:ml-20 flex flex-col justify-center items-center lg:items-start px-4 sm:px-6 max-w-full'>
          
          <div className='grid grid-rows-[min-content_auto] place-items-center lg:place-items-start gap-5 md:gap-3 xl:gap-2'>

            <div className="mx-7 text-2xl sm:text-3xl font-light text-center sm:text-start">
              <span>{'Hi, This is '}</span>
              <div className="inline-block text-light-blue-100 font-medium">Muhammad Azeem</div>
            </div>

            <div className="lg:hidden text-center pt-2 pb-3">
              <DisplayPicture />
            </div>
            
            <div className='relative'>
              <div className='bg-blue-500/20 -z-10 w-[300px] h-[160px] sm:w-[400px] sm:h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-40' />
              <IntroCarousel />
            </div>
            
            <div className='mx-3 lg:ml-7 lg:mb-7 flex flex-wrap justify-center lg:justify-start gap-7'>

              {/* Contact Button */}
              <Contact_Btn href='/contact' />

              <div className="flex items-center gap-4">
                {/* <Site_Link_Btn>
                  <Site_Link_Path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008" />
                  <Site_Link_Circle cx="16.806" cy="7.207" r="1.078" />
                  <Site_Link_Path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419a4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688a3 3 0 0 1-1.712 1.711a5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311a3 3 0 0 1-1.719-1.711a5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311a3 3 0 0 1 1.712 1.712a5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z" />
                </Site_Link_Btn> */}

                <Site_Link_Btn href="https://www.linkedin.com/in/muhammad-azeem-siddiqui-2a0a53277/">
                  <Site_Link_Circle cx="4.983" cy="5.009" r="2.188" />
                  <Site_Link_Path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z" />
                </Site_Link_Btn>

                <Site_Link_Btn href="https://github.com/MAzeemSidd">
                  <Site_Link_Path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336a9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" />
                </Site_Link_Btn>

                {/* <Site_Link_Btn>
                  <Site_Link_Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2M4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2l1 1v1.931C7.061 19.436 4 16.072 4 12m14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.95 7.95 0 0 1-1.67 4.873" />
                </Site_Link_Btn> */}

                <Site_Link_Btn href="https://mail.google.com/mail/?view=cm&to=m.azeemsiddiqui94@gmail.com">
                  <g fill="currentColor">
                    <Site_Link_Path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <Site_Link_Path d="M20 4a2 2 0 0 1 1.995 1.85L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6a2 2 0 0 1 1.85-1.995L4 4zm0 3.414l-6.94 6.94a1.5 1.5 0 0 1-2.12 0L4 7.414V18h16zM18.586 6H5.414L12 12.586z" />
                  </g>
                </Site_Link_Btn>
              </div>

            </div>

          </div>
        
        </div>
        
        {/* right column with display picture */} {/* col-span-5 */}
        <div className='hidden lg:block lg:h-full lg:row-span-2 lg:col-span-2 lg:mr-20 w-0 lg:w-full place-content-center'>
          <DisplayPicture />
        </div>

      </div>

    </div>
  )
}

export default Home