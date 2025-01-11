import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/home">Home</Link></li>    {/* Links to /home */}
          <li><Link href="/about">About</Link></li>  {/* Links to /about */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;