import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactList = (props) => {
    const { contact, deleteContact } = props;

    return (
        <div className='contact-list'>
            <h2>Contact List</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.contact.name}</td>
                                <td>{contact.contact.email}</td>
                                <td>
                                    <DeleteIcon onClick={() => deleteContact(contact.id)} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;
