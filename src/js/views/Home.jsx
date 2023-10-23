import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";

const Home = () => {
	
	const { store, actions } = useContext(Context);
	




	return(
		<div className="container">
			<div>
				<h1 className="text-danger">Characters</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.characters.map((item,index) => {
						return (
							<Card key={index} index={index} object={item.result} category="characters"/>
						);
					})}					
				</div>			
			</div>
			<div>
				<h1 className="text-danger">Planets</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.planets.map((item,index) => {
						return (
							<Card key={index} index={index} object={item.result} category="planets"/>
						);
					})}
				</div>
			</div>
		</div>
	);
	
};

export default Home;
