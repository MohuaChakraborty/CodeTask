import React from 'react'
import { useSelector } from "react-redux";
import List from './List'
import { Link } from 'react-router-dom'
import { contactSelectors } from "../../redux/contactsSlice";

function ContactList(props) {
    const total = useSelector(contactSelectors.selectTotal);

    return (
        <div className="flex items-center justify-center p-2">
                <div className="container mt-4">
                    <div
                        class="bg-neutral-50 px-6 py-10 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                        <h1 class="mb-6 text-4xl font-bold">Contact Management</h1>
                        <h3 class="mb-8 text-2xl">Contact Management helps in managing contacts in a robust manner</h3>
                        <Link to="/contacts">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Create Contact
                            </button>
                        </Link>
                    </div>
                    <div className='ui celled list'>
                        {total > 0 ? <List /> :
                            <div className="bg-blue-100 border border-blue-400 text-black-700 px-4 py-3 rounded relative">
                                <span className="block sm:inline">No contact found, Please create contact from create contact button!</span>
                            </div>
                        }
                    </div>
                </div>
        </div>
    )
}
export default ContactList
