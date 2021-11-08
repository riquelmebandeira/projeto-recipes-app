import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header(props) {
  const { title } = props;
  return (
    <header>
      <input
        type="image"
        src={ profileIcon }
        data-testid="profile-top-btn"
        alt="Foto de perfil"
      />
      <h1 data-testid="page-title">{title}</h1>
      <input
        type="image"
        src={ searchIcon }
        alt="Ícone de lupa"
        data-testid="search-top-btn"
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
