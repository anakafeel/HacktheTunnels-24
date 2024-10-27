export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ROOT}/api/v1/login`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is okay (status in the range 200-299)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed'); // Provide a fallback error message
    }

    const json = await response.json();
    return json; // Return the successful login response
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};
