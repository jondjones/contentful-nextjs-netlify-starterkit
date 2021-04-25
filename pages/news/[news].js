
const NewsPage = () => {
    return (
        <>
         <img src="https://i.imgflip.com/59ql86.jpg" />
        </>
    )
}

export async function getStaticPaths() {
    // Call ContentFUL API to get a list of valid paths

    const paths = ['/news/one', '/news/two'];

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps() {
    return {
        props: {}
    }
}

export default NewsPage;