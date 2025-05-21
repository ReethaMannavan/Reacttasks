const UserStatus = ({ isLoggedIn }) => { 
  return <h2>{isLoggedIn ? "Welcome!" : "Please Log In"}</h2>; 
}; 
export default UserStatus; 