const API_BASE_URL = 'http://localhost:3001';
// Function to send a POST request to the '/auth/login' endpoint with user login information
const login = async (userInfo) => {
    try {
        // Send a POST request to '/auth/login' with user login information in JSON format
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(userInfo)
        });
        // Parse the response body as JSON
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }
        // Store the token if it's returned
        if (data.token) {
            localStorage.setItem('token', data.token);
        }
        return data; // Return the data received from the server
    }
    catch (err) {
        console.error('Login error:', err);
        throw err;
    }
};
export { login }; // Export the login function to be used elsewhere in the application
