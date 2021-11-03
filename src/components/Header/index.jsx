import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

function Header() {
  const { userData } = useContext(AuthContext);
  const { name } = userData;
  return (
    <header>
      Olá { name }
    </header>
  );
}

export default Header;
