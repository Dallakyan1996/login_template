import { apiServices } from '../Services/api';
import { history } from './history';

export function handleResponse(response) {
    return response.text().then(text => {
        try {
            var data = text && JSON.parse(text);
        }
        catch (err) {
            apiServices.logout();
            window.location.reload(true);
        }
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                if (history.location.pathname !== '/login') {
                    apiServices.logout();
                    window.location.reload(true);
                }
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}