import {HiOutlineLocationMarker} from 'react-icons/hi';
import {AiOutlineQuestionCircle, AiOutlineStar} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';

function App() {
  return (
    <div>
      <header className='header'>
        <img className='header logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ninjavan.svg/1280px-Ninjavan.svg.png' />
        <nav className='header navbar'>
          <ul className='navbar-list'>
            <li className='navbar-list-item'> 
              <BsSearch className='icon'/>
              <br />
              track parcel
            </li>
            <li className='navbar-list-item center'> 
              <HiOutlineLocationMarker className='icon'/>
              <br />
              drop-off point
            </li>
            <li className='navbar-list-item'> 
              <AiOutlineQuestionCircle className='icon'/>
              <br />
              our services
            </li>
          </ul>
        </nav>
      </header>
      
      <body>
        <img className='image' src='https://2.bp.blogspot.com/-PAJP5edqqdo/WWth456YEjI/AAAAAAAAA-k/m9P6PwgSBx0Dn2A8B3BFDSSQgQ2pDnlTQCLcBGAs/s1600/8.png' />
        <div className='delivery-status'>Your parcel is delivered successfully!</div>
        <br/>
        <div className='user-message'>
          <p>
            Hi Gerald Chong,
          </p>
          <p>
            Yay, your parcel has been successfully delivered! <span className='tracking-id'>Your parcel tracking ID is SHPM2857353140.</span>
          </p>
        </div>

        <br/>
        <div className='receipt'>
          <div className='receipt header'>Delivery Details</div>
          <div className='receipt info'>
            <ul className='receipt-list'>
              <li className='receipt-list-item'>
                <div className='info-title'>Recipient Address:</div>
                <div>Fusionoplis. 10 Fusionoplis Drive, #01-02 Singapore</div>
              </li>

              <li className='receipt-list-item'>
                <div className='info-title'>Delivery Date and Time:</div>
                <div>27 October 2021, 15:47</div>
              </li>

              <li className='receipt-list-item'>
                <div className='info-title'>Contactless Delivery:</div>
                <div>Yes</div>
              </li>

              <li className='receipt-list-item'>
                <div className='info-title'>Cash-on-Delivery:</div>
                <div>Not applicable</div>
              </li>
            </ul>
          </div>
        </div>
        <br/> 
        <div className='footer'>
          <div className='review-text'>How would you rate the Ninja who delivered this parcel?</div>
          <div className='review-rating'>
            <AiOutlineStar size={40}/><AiOutlineStar size={40}/><AiOutlineStar size={40}/><AiOutlineStar size={40}/><AiOutlineStar size={40}/>
          </div>
          <div className='parcel-error'>Was your parcel not delivered?</div>
          <button className='report-btn'>Report Missing Parcel</button>
        </div>
      </body>
      
    </div>
  );
}

export default App;
