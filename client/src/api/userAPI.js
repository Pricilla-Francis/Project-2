import Auth from '../utils/auth';
import { API_BASE_URL } from '../config';
const retrieveUsers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/users`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            },
            credentials: 'include'
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error('Invalid user API response, check network tab!');
        }
        return data;
    }
    catch (err) {
        console.log('Error from data retrieval:', err);
        return [];
    }
};
export { retrieveUsers };
