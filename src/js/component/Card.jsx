import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
    const { store, actions } = useContext(Context);
	const [heart, setHeart] = useState(false);
    const details = () => {
        if(props.category=="characters") {
            return (
                <p className="card-text">Gender: {props.object.properties.gender}<br/>
										Hair Color: {props.object.properties.hair_color}<br/>
										Eye-Color: {props.object.properties.eye_color}</p>
            );
        }
        if(props.category=="planets") {
            return (
                <p className="card-text">Population: {props.object.properties.population}<br/>
										Terrain: {props.object.properties.terrain}</p>	
            );
        }
    };

	useEffect(() => {
		let allNames = store.favorites.map((item)=>{
			return item.title;
		});
		if(allNames.includes(props.object.properties.name)){
			setHeart(true);
		} else{
			setHeart(false);
		}
	},[store.favorites])
    
    return(
        <div className="card m-3" style={{"width": "18rem"}}>
			<img src={`https://starwars-visualguide.com/assets/img/${props.category}/${props.object.uid}.jpg`} className="card-img-top" alt="No picture available"/>
			<div className="card-body">
				<h5 className="card-title">{props.object.properties.name}</h5>
				{details()}	
				<div className="d-flex justify-content-between">
					<Link to={`/details/${props.category}/${props.index}`}>
						<button className="btn btn-outline-primary">Learn more!</button>
					</Link>
					<button onClick={() => actions.favoritesController(props.object.properties.name, `/details/${props.category}/${props.index}`)} className="btn btn-outline-warning" >
						{heart ? <i className="fas fa-heart" style={{"color":"red"}}></i> : <i className="far fa-heart"></i>}
					</button>
				</div>				
			</div>
		</div>
    );
};

export default Card;