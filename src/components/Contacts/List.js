import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSelectors, removeAllContacts } from "../../redux/contactsSlice";
import Item from "./Item";
import Swal from 'sweetalert2';

const List = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  const handleDeleteAll = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeAllContacts())
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };

  return (
    <div className="w-full">
        <div className="flex justify-end">
          <div>
            {total > 0 && <button className="py-3 px-4 flex items-center text-sm font-medium leading-none text-white bg-red-500 hover:bg-red-700 cursor-pointer rounded" onClick={handleDeleteAll}>
            {total === 1 ? "Delete Item" : "Delete All"}
              </button>}
          </div>
      </div>

      {total > 0 && 
      <div className="flex items-center justify-center font-sans overflow-hidden">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">First Name</th>
                  <th className="py-3 px-6 text-left">Last Name</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              {contacts.map((contact) => (
                <Item key={contact.id} contact={contact} />
                ))}
            </table>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default List;
