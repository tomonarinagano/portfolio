import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>Portfolio</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/blog">ブログ</Link>
          </li>
          <li>
            <a href='#'>SNS</a>
          </li>
          <li>
            <a href='#'>GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header