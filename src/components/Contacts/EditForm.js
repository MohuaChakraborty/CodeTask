import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateContacts } from "../../redux/contactsSlice";

const EditForm = ({ contact }) => {
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [status, setStatus] = useState(contact.status);

  // Define the radio button options
  const reasonOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'In Active', value: 'In Active' }
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName) return false;

    dispatch(
      updateContacts({
        id: contact.id,
        changes: {
          firstName,
          lastName,
          status
        },
      })
    );
    navigate("/");
  };

  const handleRadioChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="name" className="mb-3 block text-sm font-medium text-[#07074D]">
          First Name
        </label>
        <input
          required="true"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-3">
        <label
          for="lastName"
          className="mb-3 block text-sm font-medium text-[#07074D]"
        >
          Last Name
        </label>
        <input
          required="true"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-3">
        <label
          for="lastName"
          className="mb-3 block text-sm font-medium text-[#07074D]"
        >
          Status
        </label>

        {reasonOptions.map((option, index) => (
          <div key={index}>
            <input
              required="true"
              id={`reason-${option.value}`}
              type="radio"
              name="reason"
              value={option.value}
              checked={status === option.value}
              onChange={handleRadioChange}
            />
            <label htmlFor={`reason-${option.value}`}>{option.label}</label>
          </div>
        ))}
      </div>

      <div>
        <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-4 text-sm font-semibold text-white outline-none">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditForm;
