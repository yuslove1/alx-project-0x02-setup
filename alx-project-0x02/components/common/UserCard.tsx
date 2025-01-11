import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">ID: {id}</p>
      <p className="text-gray-600 mb-1">Email: {email}</p>
      <div className="mt-2">
        <p className="text-gray-600 font-medium">Address:</p>
        <p className="text-gray-500 text-sm">
          {address.street}, {address.suite}
        </p>
        <p className="text-gray-500 text-sm">
          {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;