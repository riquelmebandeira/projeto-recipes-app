import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header(props) {
  const { title, showSearchBtn } = props;
  return (
    <header>
      <Link to="/perfil">
        <input
          type="image"
          src={ profileIcon }
          data-testid="profile-top-btn"
          alt="Foto de perfil"
        />
      </Link>
      <h1 data-testid="page-title">{title}</h1>
      {!showSearchBtn ? null
        : (
          <input
            type="image"
            src={ searchIcon }
            alt="Ícone de lupa"
            data-testid="search-top-btn"
          />)}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchBtn: PropTypes.bool,
};

Header.defaultProps = {
  showSearchBtn: true,
};

export default Header;
