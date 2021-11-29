import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';

function Header(props) {
  const { title, showSearchBtn } = props;
  const [searchBar, setSearchBarTo] = useState(false);
  return (
    <>
      <header className="header-container">
        <Link to="/perfil">
          <input
            type="image"
            src={ profileIcon }
            data-testid="profile-top-btn"
            alt="Foto de perfil"
          />
        </Link>
        <h1 className="title" data-testid="page-title">{title}</h1>
        {!showSearchBtn ? <div> </div>
          : (
            <input
              type="image"
              src={ searchIcon }
              alt="Ícone de lupa"
              data-testid="search-top-btn"
              onClick={ () => setSearchBarTo(!searchBar) }
            />)}
      </header>
      {
        searchBar && <SearchBar />
      }
    </>
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
