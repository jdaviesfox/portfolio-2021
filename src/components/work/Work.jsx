import './work.css';

const Work = ({img,link}) => {
    return(
        <div className="work">
            <div className="work-browser">
                <div className="work-circle-1"></div>
                <div className="work-circle-2"></div>
                <div className="work-circle-3"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt ="" className="work-img"></img>
            </a>
        </div>
    )
}

export default Work;