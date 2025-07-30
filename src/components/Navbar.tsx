import './Navbar.css';

function Navbar() {

  function scrollTo(e: string){
    const element = document.getElementById(e);
    element?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <>
      <div className='navbar-wrapper'>
        <span className='navbar'>
          <span className='category' 
          tabIndex={0}
          onClick={() => {scrollTo("About")}}
          >About</span>

          <span className='category' 
          tabIndex={0}
          onClick={() => {scrollTo("Projects")}}
          >Projects</span>

          <span className='category' 
          tabIndex={0}
          onClick={() => {scrollTo("Contact")}}
          >Contact</span>
        </span>
      </div>
    </>
  )
}

export default Navbar