import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing404Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default Landing404Page;
