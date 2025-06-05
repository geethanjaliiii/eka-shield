import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  function initAuthApp(config: {
    clientId: string;
    containerId: string;
    method: string;
    platform: string;
    onSuccess: (params: any) => void;
    onError: (params: any) => void;
  }): void;
}

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize EKA Auth SDK
    if (typeof initAuthApp === 'function') {
      initAuthApp({
        clientId: "androidp",
        containerId: "signin_root",
        method: "sign_in",
        platform: "patient",
        onSuccess: (params) => {
          console.log("Login successful:", params);
          // Store user data in localStorage or context
          localStorage.setItem('ekaUser', JSON.stringify(params));
          // Redirect to consent form
          navigate('/consent-form');
        },
        onError: (params) => {
          console.log("Login error:", params);
          alert('Login failed. Please try again.');
        },
      });
    }
  }, [navigate]);

  return (
      <div id="signin_root"></div>
  );
};

export default Login;