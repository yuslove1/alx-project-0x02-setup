// Import necessary components and interfaces
import React from 'react';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { UserProps } from '@/interfaces';

// Define the Users component, which receives an array of UserProps as a prop
const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div>
      {/* Render the Header component */}
      <Header />
      <div className="p-4"> {/* Add padding around the content */}
        {/* Display the main title */}
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {/* Use a responsive grid to display user cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => ( // Map over the users array
            // Pass the user data as props to the UserCard component
            // Use the user's ID as the key for optimal performance
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Fetch user data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch data from the JSONPlaceholder API
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch users data
    const users = await res.json(); // Parse the JSON response
    return { props: { users } }; // Return the users as props
  } catch (error) {
    console.error('Error fetching users:', error); // Log any errors to the console
    return { props: { users: [] } }; // Return an empty array if there's an error
  }
}

export default Users;