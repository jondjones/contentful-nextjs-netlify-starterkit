
export const getConfig  = (environment, previewMode) => {

    let accessToken = '';

    if (environment === 'staging') {
        accessToken = process.env.STAGING_CONTENTFUL_DELIVERY_TOKEN
    } else {
        if (previewMode === true) {
            accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
        } else {
            accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
        }
    }

    return {
        accessToken, 
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environment
    }
}

module.export = {
    getConfig: getConfig
}