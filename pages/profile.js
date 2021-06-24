
const Profile = (props) => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div >
                        Hello World {props.name}
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://next-boilerplate-html.netlify.app/.netlify/functions/dataapi');
    const result = await res.json();
    console.log(result)

    return {
        props: {
            name: result.name
        }
    }
}

export default Profile;