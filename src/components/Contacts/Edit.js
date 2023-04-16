import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom'
import { contactSelectors } from '../../redux/contactsSlice';
import EditForm from './EditForm'

const Edit = () => {
    const { id } = useParams();
    const contact = useSelector((state) => contactSelectors.selectById(state, id))
    if(!contact){
      return <Navigate replace to="/" />
    }

  return (
    <div className="flex items-center justify-center p-2">
      <div className="mx-auto w-full">
        <div className="container mt-4">
          <div class="bg-neutral-50 px-3 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
              <h3 class="mb-6 text-5xl font-bold"> Edit</h3>
          </div>
          <EditForm contact={contact} />
        </div>
      </div>
    </div>
  )
}

export default Edit
