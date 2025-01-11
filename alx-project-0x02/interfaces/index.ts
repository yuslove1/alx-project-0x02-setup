
export interface CardProps {
    title: string;
    content: string;
  }

  export interface Post {
    title: string;
    content: string;
  }

  export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (post: Post) => void;
  }

  // Interface for the props that the PostModal component expects
export interface PostModalProps {
  isOpen: boolean;       // Whether the modal is open or closed
  onClose: () => void;    // Function to close the modal
  onSave: (post: Post) => void; // Function to save the post data
}