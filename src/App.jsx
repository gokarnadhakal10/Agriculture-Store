
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>Online Agriculture Store </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button><a href="#register">Register </a></button>
          <button><a href="login">Login</a></button>
        </div>
      </nav>

      <section className="hero" id="home">
        <h1>Fresh from Our Farms, Healthy for Your Family</h1>
        <p>Get fresh fruits, vegetables, and quality agricultural products directly from farmers near you. Shop according to your needs, support local farmers, and enjoy healthier living with fresh, farm-grown produce.
        </p>

        <button>Shop Fresh Produce</button>
        <button className="secondary">
         Sell Your Products
        </button>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
             <div className="service-icon">🌿</div>
            <h3> Fresh Product</h3>
            <p>Fresh fruits and vegetables for healthier living.</p>
          </div>

          <div className="card">
            <div className="service-icon1">🌱</div>
            <h3>Local Farmers</h3>
            <p>Connect buyers directly with nearby growers.</p>
            
          </div>

          <div className="card">

            <h3>Farm Supplies</h3>
            <p>Seeds, fertilizers, and farming tools.</p>
          </div>

          <div className="card">
            <h3>Easy Buying & Selling</h3>
            <p>Shop products or list your own farm goods.</p>
          </div>
        </div>

      </section>

       
        
        <section className="About-us" id="about">
           <h2>About Us</h2>

    <h3 className="Fruits">Fruits</h3>

  <div className="about-cards">
    <div className="fruit">
      <h5>Apple</h5>
      <img src="C:\xampp\htdocs\bca2ndProject\src\assets\upload\mustang Apple.png" alt="Mustang Apple" />
      <p>Mustang apples</p>
    </div>

    <div className="fruit">
      <h5>Banana</h5>
      <img src="C:\xampp\htdocs\bca2ndProject\src\assets\upload\banana.jpg" alt="Banana" />
      <p>Fresh bananas</p>
    </div>

    <div className="fruit">
      <h5>Orange</h5>
      <img src="C:\xampp\htdocs\bca2ndProject\src\assets\upload\oranges.jpg" alt="Orange" />
      <p>oranges</p>
    </div>

    <div className="fruit">
      <h5>Mango</h5>
      <img src="C:\xampp\htdocs\bca2ndProject\src\assets\upload\mango.webp" alt="Mango" />
      <p>mangoes</p>
    </div>


  </div>

   <h3 className="Vegetables">Vegetable</h3>
<div className="about-card">
  <div className="vegetable">
    <h5>Cauliflower</h5>
    <img src="/assets/cauliflower.jpg" alt="cauliflower"/>
    <p>Cauliflower </p>
  </div>

  <div className="vegetable">
    <h5>Cabbage</h5>
    <img src="/assets/cabbage.jpg" alt="cabbage"/>
    <p>Cabbage</p>
  </div>

  <div className="vegetable">
    <h5>Raddish</h5>
    <img src="/assets/cauliflower.jpg" alt="raddish"/>
    <p>Raddish</p>
  </div>

  <div className="vegetable">
    <h5>Cucumber</h5>
    <img src="/assets/cauliflower.jpg" alt="cucumber"/>
    <p>Cucumber </p>
  </div>

  <div className="vegetable">
    <h5>saag</h5>
    <img src="/assets/saag.jpg" alt="Saag"/>
    <p>Saag </p>
  </div>

  <div className="vegetable">
    <h5>Potato</h5>
    <img src="/assets/potato.jpg" alt="Potato"/>
    <p>Potato </p>
  </div>

 <div className="vegetable">
    <h5>Tomato</h5>
    <img src="/assets/tomato.jpg" alt="Tomato"/>
    <p>Tomato </p>
  </div>
 
</div>

<h3 className="Seeds">Seeds</h3>
<div className="about-card">
<div className="seed">
  <h5>Pumbkin Seed</h5>
  <img src="/assets/pumbkin seed.jpg" alt="pumbkin seed">
  </img>
  <p>pumbkin seed </p>

</div>

<div className="seed">
  <h5>Maize Seed</h5>
  <img src="/assets/pumbkin seed.jpg" alt="Maize seed">
  </img>
  <p>Maize seed </p>

</div>

<div className="seed">
  <h5>Mustard Seed</h5>
  <img src="/assets/pumbkin seed.jpg" alt="Mustard  seed">
  </img>
  <p>Mustard  seed </p>

</div>

<div className="seed">
  <h5>Paddy Seed</h5>
  <img src="/assets/paddy seed.jpg" alt="paddy seed">
  </img>
  <p>paddy  seed </p>

</div>
<div className="seed">
  <h5>Cauliflower Seed</h5>
  <img src="/assets/Cauliflower seed.jpg" alt="Cauliflower  seed">
  </img>
  <p>Cauliflower  seed </p>

</div>


</div>

</section>


       
    </div>
  );
}

export default App;
