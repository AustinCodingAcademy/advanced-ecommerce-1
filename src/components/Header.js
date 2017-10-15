import React from 'react';

const Header = () => {
  return (
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a className="navbar-brand" href="#">
        Start Bootstrap
      </a>
    </div>
  );
};

export default Header;
