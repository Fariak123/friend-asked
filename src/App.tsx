import { useState } from 'react';
import do_you_love_me from './assets/do-you-love-me.gif';
import yes from './assets/yes.gif';
import love from './assets/smile.png';
import './App.css';

interface Position {
  top: string;
  left: string;
}

function App() {
  const [showNextPage, setShowNextPage] = useState(false);
  const [position, setPosition] = useState<Position>({
    top: '73.8%',
    left: '60%',
  });
  const handleRedirect = () => {
    setShowNextPage(true);
  };
  const handleMouseEnter = () => {
    const newTop = `${Math.random() * 90 + 5}%`;
    const newLeft = `${Math.random() * 90 + 5}%`;

    setPosition({ top: newTop, left: newLeft });
  };

  const NextPage = () => {
    return (
      <div>
        <img className="background" src={yes} alt="Yes" />
        <div className="test">
          <div className="love-ya" style={{ paddingRight: '12px' }}>
            I knew it!
          </div>
          <img src={love} width="32px" height="32px" />
        </div>
      </div>
    );
  };

  return (
    <div>
      {showNextPage ? (
        <NextPage />
      ) : (
        <>
          <div>
            <img className="background" src={do_you_love_me} alt="Question" />
          </div>
          <div className="love-ya">Do you love me?</div>
          <button className="button" onClick={handleRedirect}>
            <div className="love-ya-button">YES</div>
            <button
              onMouseEnter={handleMouseEnter}
              style={{
                position: 'absolute',
                ...position,
                transition: 'all 0.5s ease-out',
                padding: '10px 25px',
                fontSize: '18px',
                backgroundColor: '#FD4F66',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            >
              <div className="love-ya-button">No</div>
            </button>
          </button>
        </>
      )}
    </div>
  );
}

export default App;
