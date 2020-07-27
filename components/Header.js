import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = props => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/tugas">
            <a style={linkStyle}>Tugas</a>
        </Link>
        <Link href="/inas">
            <a style={linkStyle}>Inas Zakiyyah</a>
        </Link>
    </div>
);

export default Header;