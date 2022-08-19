import { createContext, useState } from "react";
import dataLanguage from '../languages/dataLanguage.json';

const LanguageContext = createContext();

const LanguageProvider = ({children}) => { 

    const[textData, setTextData] = useState(dataLanguage.es);

    const switchEs = () =>{       
        setTextData(dataLanguage.es);
    }

    const switchEn = () =>{       
        setTextData(dataLanguage.en);
    } 

    const data = {textData, switchEn, switchEs}
    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export {LanguageProvider};
export default LanguageContext;