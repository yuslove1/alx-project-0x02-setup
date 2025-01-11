
// import React, { Fragment, useState } from 'react'; // Import Fragment
import { Post } from '../../interfaces';
import { useState } from 'react'; // Import useState
import { PostModalProps } from '../../interfaces'; // Import PostModalProps

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSave }) => {
  // State variables to store the title and content of the post
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handler function to save the post
  const handleSave = () => {
    onSave({ title, content });  // Call the onSave function passed from the parent with the post data
    setTitle('');                // Clear the title input field
    setContent('');              // Clear the content input field
    onClose();                   // Close the modal
  };

  // If the modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  return (
    // Container for the modal and overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center"> 
      {/* Overlay: Darkens the background and closes the modal when clicked */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />

      {/* Modal Content: The actual modal window */}
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-96"> 
        <h2 className="text-lg font-bold mb-4">Create New Post</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              className="mt-1 p-2 border rounded-md w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              className="mt-1 p-2 border rounded-md w-full"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;