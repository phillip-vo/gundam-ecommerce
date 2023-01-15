import { createContext, ReactNode, useContext, useState } from "react";

type StateContextProps = {
  children: ReactNode;
};

type StateContext = {
  openFeaturedSection: () => void;
  openFeatured: boolean;
};

const StateContext = createContext({} as StateContext);

export const StateContextProvider = ({ children }: StateContextProps) => {
  const [openFeatured, setOpenFeatured] = useState<boolean>(false);

  const openFeaturedSection = () => {
    setOpenFeatured(!openFeatured);
  };

  return (
    <StateContext.Provider value={{ openFeaturedSection, openFeatured }}>
      {children}
    </StateContext.Provider>
  );
};
