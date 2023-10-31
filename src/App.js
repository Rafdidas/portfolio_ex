import { useState } from 'react';
import './App.css';


function App() {

  let [menuOn, setMenuOn] = useState('');

  return (
    <div className="wrapper">
      
      {/* header */}
      <header>
        <div className='gnb wrap_inner2'>
          <h1 className='logo'>HyeonGyu</h1>
          <div className={menuOn === 1 ? 'gnb_menu active' : 'gnb_menu'} onClick={ ()=>{ setMenuOn(1) } }>
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
        <section className='cnt_main'>main</section>
      </section>
      
    </div>
  );
}

export default App;
