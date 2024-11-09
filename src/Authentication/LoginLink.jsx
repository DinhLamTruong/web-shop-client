import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteSession } from '../Redux/Action/ActionSession';

function LoginLink(props) {
  const dispatch = useDispatch();

  const onRedirect = () => {
    localStorage.clear();

    const action = deleteSession('');
    dispatch(action);

    // fetch('http://localhost:5000/api/auth/logout', {
    //   method: 'POST',
    //   credentials: 'include',
    // });
  };

  return (
    <li className="nav-item" onClick={onRedirect}>
      <Link className="nav-link" to="/signin">
        ( Logout )
      </Link>
    </li>
  );
}

export default LoginLink;
