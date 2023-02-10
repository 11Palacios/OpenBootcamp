import React from 'react';
import { Contact } from '../../models/contact.class';
import  ContactComponent  from './../pure/Contact';

const ContactList = () => {

    const contacto = new Contact('pepe', 'botella', 'pepe@botella.es', true)

    return (
        <div>
            <ContactComponent contact={contacto} />
            
        </div>
    );
};

export default ContactList;
