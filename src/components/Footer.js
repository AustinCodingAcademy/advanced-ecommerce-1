//This component renders the Footer info.  Right now just copywright message.  Called from App.js.
import React from 'react';

function Footer() {

return (
  <footer>
      <div className="row">
          <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
          </div>
      </div>
  </footer>

  );
}

export default Footer;
