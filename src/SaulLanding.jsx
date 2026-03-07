import React, { useState } from 'react'; // Add { useState } here
import confetti from 'canvas-confetti';
import './index.css'; 

const SaulLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const handleSettle = () => {
    setIsModalOpen(true);
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#85bb65', '#2e7d32', '#ffeb3b'], 
        shapes: ['square']
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#85bb65', '#2e7d32', '#ffeb3b'],
        shapes: ['square']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    

  };

  return (
    <div className="saul-wrapper">

      <div className="ticker-wrap">
        <div className="ticker">
          JUSTICE FOR ALL • 505-503-4455 • DID YOU KNOW YOU HAVE RIGHTS? • BETTER CALL SAUL! 
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="saul-modal">
            <div className="modal-header">LEGAL NOTICE: URGENT</div>
            <div className="modal-body">
              <h2>JACKPOT!</h2>
              <p>We just sued them for everything they've got. Your check is in the mail*.</p>
              <p className="fine-print">*Check may be subject to a 99% processing fee.</p>
              <button className="saul-btn close-btn" onClick={() => setIsModalOpen(false)}>
                THANKS, SAUL!
              </button>
            </div>
          </div>
        </div>
      )}
      <header className="saul-hero">
  <div className="flag-bg"></div>

  
<img 
  src={`${import.meta.env.BASE_URL}saul-Hero.png`} 
  alt="Saul Goodman" 
  className="saul-portrait" 
/>


  <div className="saul-content">
    <h1 className="saul-title">BETTER CALL <span className="saul-name">SAUL!</span></h1>

          <h2 className="saul-tagline">"Because you deserve a lawyer that <span className="underline">other</span> lawyers fear."</h2>
          
          <div className="cta-container">
            <button className="saul-btn" onClick={handleSettle}>
              SETTLE OUT OF COURT
            </button>
            <button className="saul-btn call-btn">
              1-800-SAUL-GOOD
            </button>
          </div>
        </div>
      </header>
      <section className="video-section">
  <div className="video-container">
    <video 
      controls 
      autoPlay 
      muted 
      loop 
      className="saul-video"
    >
   <source src={`${import.meta.env.BASE_URL}saul-ad.mp4`} type="video/mp4" />

    </video>

  </div>
  <h2 className="video-caption">DON'T WAIT! YOUR FREEDOM IS AT STAKE!</h2>
</section>
<section className="contact-saul">
  <div className="form-card">
    <h2>GET OUT OF JAIL <span className="highlight-red">FREE*</span></h2>
    <p>*Not actually free. Results may vary. We are not responsible for any sudden disappearances to Nebraska.</p>
    
    <form className="saul-form" onSubmit={(e) => { e.preventDefault(); alert('LEGAL REPRESENTATION INITIATED. BRING CASH.'); }}>
      <input type="text" placeholder="YOUR NAME (OR ALIAS)" required />
      <input type="email" placeholder="ENCRYPTED EMAIL" required />
      
      <select required>
        <option value="">WHAT'S THE CHARGE?</option>
        <option value="slip">SLIP AND FALL</option>
        <option value="traffic">PARKING TICKET (BORING)</option>
        <option value="criminal">CRIMINAL... LAWYER NEEDED</option>
        <option value="blue">BLUE PRODUCT DISPUTE</option>
        <option value="other">OTHER (DON'T TELL ME OVER THE PHONE)</option>
      </select>

      <textarea placeholder="TELL ME EVERYTHING (PRIVILEGED)..."></textarea>
      
      <button type="submit" className="saul-btn submit-btn">
        SEND SIGNAL TO SAUL
      </button>
    </form>
  </div>
</section>
      <section className="legal-notice">
        <h3>"The Constitution says you have rights, and so do I!"</h3>
        <p>Slip and fall? Car accident? Secret laboratory explosion? We handle it all.</p>
      </section>
      
    </div>
  );
};

export default SaulLanding; 