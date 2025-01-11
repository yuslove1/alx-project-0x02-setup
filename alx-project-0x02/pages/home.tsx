import { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { Post } from '@/interfaces'; 

const Home: React.FC = () => {

  const initialPost = [
    {
      title: "Card 1",
      content: "This is the Home page and this content is passed thought the card component in the home component"
    },
    {
      title: "Card 2(Nation anthem 1)",
      content: "Arise, O Compatriots Nigeria's call obey To serve our fatherland With love and strength and faith The labour of our heroes past, shall never be in vain To serve with heart and might, One nation bound in freedom, peace and unity."
    },
    {
      title: "Card 3 (Nation anthem 2)",
      content: "Oh God of creation, Direct our noble cause Guide thou our leaders right Help our youth the truth to know In love and honesty to grow And living just and true Great lofty heights attain To build a nation where peace and justice shall reign"
    }
  ]

  // State to store the posts.  Initialize as an empty array.
  const [posts, setPosts] = useState<Post[]>(initialPost);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSavePost = (newPost: Post) => {
    setPosts([...posts, newPost]); // Add the new post to the array
  };

  return (
    <div className="p-4">

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" // Added margin-bottom
      >
        Open Modal
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePost}
      />

      {/* Dynamically render the cards */}
      <div>
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
