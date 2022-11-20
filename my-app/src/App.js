
import './App.css';
import InfoCard from './InfoCard/InfoCard';

import profileImg from './images/image-jeremy.png';
import data from './data.json'


function App() {


  return (
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center lg:m-72 m-10 ">
          <div className="grid grid-col-2 lg:grid-flow-col sm:grid-flow-row gap-4 cards" >
            <InfoCard name={"Jeremy Robson"} profileImg={profileImg} data={data} ></InfoCard>


          </div>
        </div>

      </div>

  );
}

export default App;
