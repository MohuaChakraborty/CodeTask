import React from "react";
import Form from "./Form";

const Contacts = () => {

  return (
    <div className="flex items-center justify-center p-2">
        <div className="container mt-4">
          <div class="bg-neutral-50 px-3 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
              <h3 class="mb-6 text-5xl font-bold"> Add Contacts</h3>
          </div>
          <Form />
        </div>
    </div>
  );
};

export default Contacts;
