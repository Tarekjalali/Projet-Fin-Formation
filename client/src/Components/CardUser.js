import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../Redux/Actions/AuthActions';
import { Button } from 'flowbite-react'; // Import Flowbite Button

const CardUser = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4">
        {/* User Information */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.email}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">User ID: {el._id}</p>

        {/* Flowbite Buttons for Delete */}
        <div className="flex gap-4">
          <Button
            onClick={() => dispatch(deleteUsers(el._id))}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
