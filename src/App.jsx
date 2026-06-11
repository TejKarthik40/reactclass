
import './App.css'
import Header from './Header'
import Card from './Card'
function App() {
  
 
  return (
    <>
    <section style={{textAlign:"center"}}  >
   <Header/>
    <img src="https://zerodha.com/static/images/landing.svg" alt="" />
    <h2>Invest in everything</h2>
    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button id='btn' >SignUp</button>
    </section>

    <section>
      <h1>cards</h1>
      <Card  img="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/9/30/1a225d88-3055-4bfb-ba98-1fb803c0c2cd_image2778ac1085ac44cf2ab0c2fe59a34385c.JPG" name="Curry Bowl" location="Chandrasekharpur, Bhubaneswar"  />
      <Card  img="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/11/5/c48b6233-75f2-4577-98d9-4fb0dd555f30_image1968203e8e28a4bd9a3355443044bdcd1.JPG" name="Petuk Maharaaj" location=" Infinia Tower, Chandrasekharpur, Bhubaneswar
"  />
    
    </section>
    </>
  )
}

export default App
