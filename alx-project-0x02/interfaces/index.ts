
export interface CardProps {
    title: string;
    content: string;
  }

  export interface Post {
    title: string;
    content: string;
  }

  // Interface for the props that the PostModal component expects
export interface PostModalProps {
  isOpen: boolean;       // Whether the modal is open or closed
  onClose: () => void;    // Function to close the modal
  onSave: (post: Post) => void; // Function to save the post data
}

export interface ButtonProps {
  text: string; // Text to display on the button
  size?: 'small' | 'medium' | 'large'; // Optional size prop
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'; // Optional shape prop
  onClick?: () => void; // Optional click handler
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}