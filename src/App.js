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
        <div className='gnb'>
          <div className={`gnb_menu ${menuOn ? 'active' : ''}`} onClick={ toggleMenu }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1 className='logo'>HyeonGyu</h1>
        </div>
      </header>
      {/* cnt */}
      <section className='cnt_body'>
        <section className='cnt_main'>
          <div className='top_section tac'>
            <div className='main_icon'>
              <img src={process.env.PUBLIC_URL + '../img/main_icon.png'} alt='main_icon' />
            </div>
            <p>Park HyeonGyu.</p>
          </div>
        </section>
      </section>
      
    </div>
  );
}

export default App;
