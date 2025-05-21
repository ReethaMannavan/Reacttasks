const WelcomeMessage = ({ isLoggedIn }) => { 
  return ( 
    <div> 
      <h2>Welcome to our site</h2> 
      {isLoggedIn && <p>"Hello, User!"</p>} 
    </div> 
  ); 
}; 
 
export default WelcomeMessage;