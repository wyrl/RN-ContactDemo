let base_url = 'http://example.com';
const endpoint = '/api/contacts';


const getBaseUrl = () => {    
    return base_url;
}

const setBaseUrl = (url) => {
    base_url = url;
}

export { getBaseUrl, setBaseUrl, endpoint };