// src/infrastructure/ServiceAPI/Accounts.ts

const API_URL = import.meta.env.VITE_API_ROOT;

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/api/v1/login`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
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
