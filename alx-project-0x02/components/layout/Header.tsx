import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto px-4 flex items-center justify-between"> {/* Container for responsiveness */}
        <div> {/* Left side (title) */}
          <Link href="/" className="text-xl font-bold">SoloForge</Link> 
        </div>
        <ul className="flex space-x-4"> {/* Right side (navigation links) */}
          <li>
            <Link href="/home" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded">About</Link>
          </li>
          <li>
            <Link href="/posts" className="hover:bg-gray-700 px-3 py-2 rounded">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;