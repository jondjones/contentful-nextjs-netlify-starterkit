import { fetchEntries } from '../utils/contentFulPage';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Home = (props) => {

    const { fields } = props;
    const router = useRouter();

    const clickMe = (e) => {
        e.preventDefault();
        router.push('about')
    }

    return (
        <>
        <Head>
            <title>Sample Site</title>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" /> 
            <meta name="description" content="Jon Page" />
        </Head>
        <div class="hero">
            <div class="container">
                <h1>Welcome To My Website</h1>
                Lorem ipsum virtual sourdough bread ballot uncertain times asymptomatic. Election wash hands antibodies. Asymptomatic WHO self care pandemic zoombomb protests mask. Kraken staycation stay-at-home order postponed remote learning. Stimulus Zoom call amazon prime ballot it's about March 213th TikTok. Maskne frontline workers Dr. Fauci furlough no march madness. Sweatpants Zoom call bubble Joe Exotic.  
            </div>
        </div>
        <section class="container content">
            <h2>Content One</h2> 
            <p>
                        {fields.map((item) => {
                console.log(item.title);
                return (
                <>
                    {documentToReactComponents(item.title)}
                    {item.trueFalse.toString()}
                </>);
            })}
            </p>
        </section>
        <section class="container content">
            <h2>Content Two</h2> 
            <p>
            <button onClick={clickMe} >
                Click Here!
            </button>
            </p>
        </section>
        </> 
    )
}

export async function getStaticProps() {
    const entries = await fetchEntries();
    // console.log(entries);

    let data = entries.filter(() => function() {
    return item.sys.contentType.sys.id === 'page'})

    // console.log(data)

    const fields = data.map((item) => item.fields );

    // console.log(fields);

    return {
        props: {
            fields: fields,
            data: data
        }
    }

}

export default Home;
