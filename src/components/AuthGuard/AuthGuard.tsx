import { ReactNode, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

interface AuthGuardProps {
  redirectLink: string;
  children: ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  redirectLink,
  children,
}) => {
  const [user, loading /*error*/] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) navigate(redirectLink);
  }, [user, loading, navigate, redirectLink]);
  return <>{children}</>;
};
