import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/Home">Home</Link></li>    {/* Links to /home */}
          <li><Link href="/About">About</Link></li>  {/* Links to /about */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;