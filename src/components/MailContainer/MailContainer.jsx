import { useContext } from 'react';
import { FormDataContext } from '../../context/FormDataContext';
import Mail from '../Mail/Mail';
import './MailContainer.css';


function MailContainer() {
    const { formDataList } = useContext(FormDataContext);
    return (
        <section className='mail-container'>
            <h2 className='mail-title'>Messagerie</h2>
            {formDataList.map((formData, index) => (
                <Mail
                    key={index}
                    name={formData.name}
                    firstname={formData.firstname}
                    object={formData.object}
                    textMessage={formData.textMessage}
                />
            ))}
        </section>
    )
}

export default MailContainer;