import Link from 'next/link'

const Nav = () => {
    return (
         <nav className="nav">
            <div className="container">
                <h1 className="logo">
                    <a href="#">My Website</a>
                </h1>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news/one">
                            <a>News Article</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;