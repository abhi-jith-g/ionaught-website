
// import Button from './Components/Button'

// function App() {
//   return(
//     <div>
//     <header class='head'>Facebook</header>
    
//     </div> 
//   )
// }
// export default App;
import Ad from './Components/Ad'
import  './App.css'
import phone1 from '././S22_Ultra_ProductKV_Black_MO.jpg'
import phone2 from '././iphone-13-pro-header-9to5mac.jpg'
import phone3 from '././1652442346708.jpg'
import phone4 from '././61hTRNRYtSL._SL1500_.jpg'
import phone5 from '././1-M00-00-3C-CgGRkWEaC7CAZA_WAANueL9TH6Q762_1080_960.jpg'
import phone6 from '././1652442346708.jpg'
import phone7 from '././iphone-13-pro-header-9to5mac.jpg'
import phone8 from '././S22_Ultra_ProductKV_Black_MO.jpg'

function App(){
  return(
    <div className="App">
      <header>
        <div className='logo'>Ionaught Technologies</div>
        <div className="navigate">Home | About | Contact Us | SignUp | SignIn |</div>
      </header>
      <main>
        <Ad icon={phone1} product='Samsung Galaxy Ultra' cost='1,25,000/-'/>
        <Ad icon={phone2}product='iphone 13 pro' cost='85,000/-'/>
        <Ad icon={phone3}product='Realme Narzo' cost='40,000/-'/>
        <Ad icon={phone4}product='VIVO Y21' cost='60,000/-'/>
        <Ad icon={phone5}product='OPPO A16' cost='65,000/-'/>
        <Ad icon={phone6}product='Realme Narzo' cost='65,000/-'/>
        <Ad icon={phone7}product='iphone 13 pro' cost='65,000/-'/>
        <Ad icon={phone8}product='Samsung Galaxy Ultra' cost='1,25,000/-'/>
        
      </main>
      <footer>
        <div>
          Terms and Conditions</div>
          <div className='copy'>©Ionaught Technology</div>       
      </footer>
    </div>
  )
}
export default App;