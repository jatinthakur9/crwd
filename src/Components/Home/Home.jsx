import "./Home.css";

import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="main-container">
      <Header />

      <div className="body-container">
        <p>This is the home page</p>
      </div>
    </div>
  );
};

export default Home;
