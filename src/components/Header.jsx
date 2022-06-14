import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import '../styles/Header.css';

function Header(props) {
  const { title, showSearchBtn, className } = props;
  const [searchBar, setSearchBarTo] = useState(false);
  return (
    <>
      <header className={ className }>
        <div>
          <Link to="/perfil">
            <input
              type="image"
              src={ profileIcon }
              data-testid="profile-top-btn"
              alt="Foto de perfil"
            />
          </Link>
          <h1 className="title" data-testid="page-title">{title}</h1>
          {showSearchBtn && (
            <input
              type="image"
              src={ searchIcon }
              alt="Ícone de lupa"
              data-testid="search-top-btn"
              onClick={ () => setSearchBarTo(!searchBar) }
            />)}
        </div>
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
  className: PropTypes.string,
};

Header.defaultProps = {
  showSearchBtn: true,
  className: '',
};

export default Header;
