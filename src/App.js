import { useState } from 'react';
import './App.css';
import './common_styles.css';

function App() {

  let [menuOn, setMenuOn] = useState(false);
  let toggleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <div className="wrapper">
      {/* header */}
      <header>
        <div className='gnb '>
          <h1 className='logo'>HyeonGyu</h1>
          <div className={`gnb_menu ${menuOn ? 'active' : ''}`} onClick={ toggleMenu }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      {/* cnt */}
      <section className='cnt_body'>
        <section className='cnt_main'>
          <div className='top_section tac'>
            <p>Hello !</p>
            <p>I'm Park HyeonGyu.</p>
          </div>
        </section>
      </section>
      <footer>
        <div className='wrap_inner2'>
          <p className='ft_info tac'>Designed and Developed by HyeonGyu Park</p>
          <p className='copyright tac'>Copyright © 2023 HG</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
