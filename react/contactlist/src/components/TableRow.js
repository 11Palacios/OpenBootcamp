import React from 'react';

const TableRow = ({contact, erase, connect}) => {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
            <td>{contact.online ? <i class="fa-solid fa-circle-dot green"></i> : <i class="fa-solid fa-circle-dot red"></i>}</td>
            <td>
                <span onClick={() => {if(window.confirm(`change status ${contact.name}?`)){connect(contact.name)}}}>
                    {contact.online ? <i class="fa-solid fa-plug-circle-xmark red"></i> : <i class="fa-sharp fa-solid fa-plug green"></i>}
                </span>
                 | 
                <span onClick={() => {if(window.confirm(`Sure to delete ${contact.name}?`)){erase(contact.name)}}}><i class="fa-solid fa-trash-can red"></i></span>
            </td>
        </tr>
    );
}

export default TableRow;
