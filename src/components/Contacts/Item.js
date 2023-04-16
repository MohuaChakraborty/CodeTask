import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContacts } from "../../redux/contactsSlice";

import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from 'sweetalert2';

const Item = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
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
        dispatch(deleteContacts(id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };

  return (
    <tbody className="text-gray-600 text-sm font-light">
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <span className="font-medium">{contact.firstName}</span>
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <span className="font-medium">{contact.lastName}</span>
        </td>

        <td className="py-3 px-6 text-left whitespace-nowrap">
          <span className="font-medium">{contact.status}</span>
        </td>

        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <Link to={`/edit/${contact.id}`}>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <HiOutlinePencil size={20} />
              </div>
            </Link>
            <button onClick={() => handleDelete(contact.id)}>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <RiDeleteBinLine size={20} />
              </div>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default Item;
