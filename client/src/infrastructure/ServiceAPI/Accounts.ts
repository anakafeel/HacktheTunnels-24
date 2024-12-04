// src/infrastructure/ServiceAPI/Accounts.ts
export const login = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/login', {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
