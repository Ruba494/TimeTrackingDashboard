import "./InfoCard.css";
import Card from "../Card/Card";
import {useState} from "react";

function InfoCard({name, profileImg, data}) {
    const [selection, setSelection] = useState("daily");
    return(
        <>
            <div className="flex content-start row-span-2  grid grid-flow-row card-bg max-h-fit ">

                    <div className="cardContaier info-bg flex flex-col justify-between max-lg:flex-row max-lg:items-center  max-lg:justify-between ">
                        <div >
                            <img src={profileImg} className="border-4 rounded-full w-24 max-lg:w-40 " alt="profile"/>
                        </div>
                        <div className="my-10 max-lg:ml-2">
                            <p className="text-1xl">reported for</p>
                            <h3 className="max-lg:text-2xl max-lg:whitespace-nowrap">{name}</h3>
                        </div>

                    </div>
                    <div className="cardContaier grid max-lg:grid-flow-col max-lg:text-center gap-4  grid-flow-row text-left " >
                        <p className={selection==="daily"?"option active":"option notactive"} onClick={(e) => setSelection("daily")} >Daily</p>
                        <p className={selection==="weekly"?"option active":"option notactive"} onClick={(e) => setSelection("weekly")}>Weekly</p>
                        <p className={selection==="monthly"?"option active":"option notactive"}  onClick={(e) => setSelection("monthly")}>Monthly</p>
                    </div>

                </div>
            {data.map(d => (
                <Card title={d.title} timeframe={d.timeframes} selection={selection}  key={d.title}
                ></Card>
            ))}


        </>

    );
}
export default InfoCard;

