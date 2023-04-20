import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  // Define the radio button options
  const reasonOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'In Active', value: 'In Active' }
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !status) return false;

    dispatch(addContact({ id: nanoid(), firstName, lastName: lastName, status: status }));
    setFirstName("");
    setLastName("");
    navigate("/ContactManagement");
  };

  // Define the function to handle changes to the radio button selection
  const handleRadioChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            for="firstName"
            className="mb-3 block text-sm font-medium text-[#07074D]"
          >
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


            <div class="flex">
              <div key={index} class="mb-[0.125rem] mr-6 inline-block min-h-[1.5rem]">

                <input
                  required="true"
                  id={`reason-${option.value}`}
                  type="radio"
                  name="reason"
                  defaultValue={"Active"}
                  value={option.value}
                  checked={status === option.value}
                  onChange={handleRadioChange}
                />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor={`reason-${option.value}`}>{option.label}</label>
              </div>
            </div>

          ))}
        </div>

        <div>
          <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-4 text-sm font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
