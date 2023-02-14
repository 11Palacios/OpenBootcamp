import React from 'react';
import TableRow from './TableRow';

const Table = ({list, erase, connect}) => {
    return (
        <div className='container card'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Online</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(contact => <TableRow  key={contact.name} contact={contact} erase={erase} connect={connect} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
