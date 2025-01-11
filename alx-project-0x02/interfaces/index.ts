
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

// Interface for the Button component props
export interface ButtonProps {
  text: string; // Text to display on the button
  size?: 'small' | 'medium' | 'large'; // Optional size prop
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'; // Optional shape prop
  onClick?: () => void; // Optional click handler
}

// Interface for the Post component props
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

// Interface for the User component props
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}