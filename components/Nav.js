import Link from 'next/link'

const Nav = () => {
    return (
         <nav class="nav">
            <div class="container">
                <h1 class="logo">
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