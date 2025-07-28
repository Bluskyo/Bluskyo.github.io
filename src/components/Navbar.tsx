import './Navbar.css';

function Navbar() {

  function getId(e: string){
    const element = document.getElementById(e);
    element?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <>
      <div className='navbar-wrapper'>
        <span className='navbar'>
          <p className='category' 
          onClick={() => {getId("About")}}
          >About</p>

          <p className='category' 
          onClick={() => {getId("Projects")}}
          >Projects</p>

          <p className='category' 
          onClick={() => {getId("Contact")}}
          >Contact</p>
        </span>
      </div>
    </>
  )
}

export default Navbar