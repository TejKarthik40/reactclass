
function Header() {

  let togglemode=()=>{
  document.body.classList.toggle("change")
  }

  return (
    <>
     <header style={{display:"flex",justifyContent:"space-evenly"}}   >
    <img  height={30} width={100}      src="https://zerodha.com/static/images/logo.svg" alt="logo" />

    <nav style={{display:"flex",gap:"20px",alignItems:"center"}}>
    <a href="">Signup</a>
    <a href="">About</a>
    <a href="">Pricing</a>
    <a href="">Products</a>
    <a href="">Support</a>
    <button onClick={togglemode} >dark/light</button>
    </nav>

    </header>
    </>
  )
}

export default Header