import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ Component }) => {
  const nav = useNavigate();
  const token = Cookies.get('accessToken');
  useEffect(() => {
    if(!token) {
      nav('/');
      return;
    }
  })
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;