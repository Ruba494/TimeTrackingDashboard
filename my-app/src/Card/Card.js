import "./Card.css";
import workIcon from '../images/icon-work.svg';
import playIcon from '../images/icon-play.svg';
import exersiceIcon from '../images/icon-exercise.svg';
import socialIcon from '../images/icon-social.svg';
import studyIcon from '../images/icon-study.svg';
import selfCareIcon from '../images/icon-self-care.svg';
import moreIcon from '../images/icon-ellipsis.svg'

function Card({title,timeframe,selection}) {
    let icons=[
        {title:'Work',loc:workIcon,css:'work'},
        {title:'Play',loc:playIcon ,css:'play'},
        {title:'Study',loc:studyIcon,css:'study'},
        {title:'Exercise',loc:exersiceIcon,css:'exercise'},
        {title:'Social',loc:socialIcon,css:'social'},
        {title:'Self Care',loc:selfCareIcon,css:'selfcare'},
    ]

    return(
        <>
            <div className={` grid cardContaier1 justify-between static ${(icons.find((e) => e.title === title)).css}`}>

                    <div className="flex justify-end  h-0 z-0  ">
                        <img src={(icons.find((e) => e.title ===title)).loc}  className="w-20 h-20" alt="icon of category"/>
                    </div>
                    <div className="cardContaier card-bg-h z-40  mt-12  overflow-hidden ">

                       <div className="flex flex-row justify-between items-center">
                           <p> {title}</p>
                           <img src={moreIcon}/>
                       </div>

                        <div className="mt-6 flex flex-col max-lg:flex-row  max-lg:justify-between  max-lg:items-center" >
                            <h3 className="max-lg:text-3xl"><span>{timeframe[selection]["current"]}</span>hrs</h3>
                            <p className="mt-0.5">Last week - <span>{timeframe[selection]["previous"]}</span>hrs</p>
                        </div>

                </div>
            </div>

        </>

    );
}
export default Card;

