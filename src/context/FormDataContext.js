import { createContext, useState } from 'react';

const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
        const [formDataList, setFormDataList] = useState([]);

        const addFormData = (formData) => {
            setFormDataList(prevList => [...prevList, formData]);
        };

    return (
        <FormDataContext.Provider value={{ formDataList, addFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};

export { FormDataContext, FormDataProvider };