import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        console.log(location);
        if(location.state === undefined) {
            history.push("/");
        }
        
    }
    render() {
        const {location} = this.props;
        if(location.state) {
            return (
                <div className="detail-section">
                    <div className="detail-imgsec"><img className="detail-img" src={location.state.poster} /></div>
                    <div className="detail-column">
                        <span className="detail-title">{location.state.title}</span>
                        <span className="detail-year">{location.state.year}</span>
                        <ul className="detail-genres">
                            {location.state.genres.map((genre, index) => (
                                <li key={index}>{genre}</li>
                            ))}
                        </ul>
                        <span className="detail-summary">{location.state.summary}</span>
                    </div>
                </div>
            )
        } else { return null; }
    }
}

export default Detail;