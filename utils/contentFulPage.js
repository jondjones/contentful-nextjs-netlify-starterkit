const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken
});

export async function fetchEntries() {

    const response = await client.getContentType('page');
    const entries = await client.getEntries();

    // console.log(response);
    // console.log(entries);

    if (entries.items)
        return entries.items
}

export default { fetchEntries }