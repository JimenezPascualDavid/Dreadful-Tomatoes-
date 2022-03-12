import React, { useState,useContext } from 'react';

export const AppContext = React.createContext(null);

export const useSearchStore = () =>{
    return useContext(AppContext);
}


export const ContextWrapper = ({children}) => {
	const [ store, setStore ] = useState();
    const [date , setDate] = useState();
	

	return (
		<AppContext.Provider value={{ store, setStore, date, setDate}}>
			{children}
		</AppContext.Provider>
	);
}
export default ContextWrapper