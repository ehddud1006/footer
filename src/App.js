import "bootstrap/dist/css/bootstrap.min.css";

import "./blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, Button } from "react-bootstrap";
import Slider from "./slider.js";
import NavTitle from "./NavTitle.js";
import BigTitle from "./BigTitle.js";
import Slider1 from "./slider1.js";
import Slider2 from "./slider2.js";
import Footer from "./footer.js";
// 경로 표현시 . 은 현재폴더
// .. 은 상위 폴더를 의미한다.

// 키보드로 드래그할때, ctrl + home은 해당줄 제일 앞까지
// ctrl + end는 해당줄 제일 뒤까지


function App() {
  return (
    <div>
      <NavTitle></NavTitle>
      <div className="container">
        <BigTitle></BigTitle>
      </div>
      <div className="container container_padding">
        <Slider></Slider>
      </div>
      <div className="container container_padding">
        <Slider2></Slider2>
      </div>
      <div className="container">
        <Slider1></Slider1>
      </div>
      <div className="container">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
