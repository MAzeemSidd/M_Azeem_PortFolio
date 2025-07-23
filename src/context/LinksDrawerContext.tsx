import { createContext, useContext, useState, ReactNode } from 'react'

type LinksDrawerContextType = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const LinksDrawerContext = createContext<LinksDrawerContextType | undefined>(undefined)

type LinksDrawerProviderProps = {
  children: ReactNode;
};

export const LinksDrawerProvider = ({ children }: LinksDrawerProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = () => setIsOpen(true)

    const closeDrawer = () => setIsOpen(false)

    return (
      <LinksDrawerContext.Provider value={{isOpen, openDrawer, closeDrawer}}>
        {children}
      </LinksDrawerContext.Provider>
    )
}

// Rather This
// export const useDrawer = () => useContext(LinksDrawerContext)

//Write this in Typescript to throw error if context is accessed outside provider
export const useDrawer = (): LinksDrawerContextType => {
  const context = useContext(LinksDrawerContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a LinksDrawerProvider');
  }
  return context;
};