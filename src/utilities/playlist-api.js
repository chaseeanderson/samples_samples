import sendRequest from './send-request';

const BASE_URL = '/api/playlists';

export function searchAPI(search) {
    return sendRequest(`${BASE_URL}/searchAPI`, 'POST', search);
}
