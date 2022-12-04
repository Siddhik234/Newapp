import { Home } from "./component/Home";
import "./component/comman.css"
import { Indicator } from "./component/Indicator";
import { Daylight } from "./component/Daylight";
import { Greetung } from "./component/Greetung";
import { Timegreet } from "./component/Timegreet";
import { Coeditor } from "./component/Coeditor";

function App() {
  return (
    <div className='main'>
      <div>

     {/* <Home/> */}
     {/* <Greetung/> */}
     
     {/* <Indicator/> */}
     {/* <Daylight/> */}
    </div>
    <div className="sk"> 
    {/* <Timegreet/> */}
    <Coeditor/>

      </div>
    </div>
  );
}

export default App;
