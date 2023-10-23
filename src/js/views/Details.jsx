import React, { useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import {Link} from "react-router-dom";
const Details = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const inde = parseInt(params.id)-1;    
    function details() {
        if(params.variable == "characters") {
            return (
                <>
                    <div className="col">
                        <p>Name<br/>{store[params.variable][params.id].result.properties.name}</p>                    
                    </div>
                    <div className="col">                    
                        <p>Birth Year<br/>{store[params.variable][params.id].result.properties.birth_year}</p>                        
                    </div>
                    <div className="col">                                            
                        <p>Gender<br/>{store[params.variable][params.id].result.properties.gender}</p>                        
                    </div>
                    <div className="col">                                                                    
                        <p>Height<br/>{store[params.variable][params.id].result.properties.height}</p>                    
                    </div>
                    <div className="col">                                                                                            
                        <p>Skin Color<br/>{store[params.variable][params.id].result.properties.skin_color}</p>                        
                    </div>
                    <div className="col">                                                                                            
                        <p>Eye Color<br/>{store[params.variable][params.id].result.properties.eye_color}</p>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="col">
                        <p>Name<br/>{store[params.variable][params.id].result.properties.name}</p>                        
                    </div>
                    <div className="col">
                        <p>Climate<br/>{store[params.variable][params.id].result.properties.climate}</p>                        
                    </div>
                    <div className="col">
                        <p>Population<br/>{store[params.variable][params.id].result.properties.population}</p>
                    </div>
                    <div className="col">
                        <p>Orbital Period<br/>{store[params.variable][params.id].result.properties.orbital_period}</p>
                    </div>
                    <div className="col">
                        <p>Rotation Period<br/>{store[params.variable][params.id].result.properties.rotation_period}</p>
                    </div>
                    <div className="col">
                        <p>Diameter<br/>{store[params.variable][params.id].result.properties.diameter}</p>
                    </div>
                </>
            );
        }
    }
    return(
        <div className="container m-5 text-center ">
            <div className="row mb-5">
                <div className="col">
                    <img src={`https://starwars-visualguide.com/assets/img/${params.variable}/${store[params.variable][params.id].result.uid}.jpg`} style={{"height": "400px"}} alt="No picture available"/>
                </div>
                <div className="col">
                    <h1>{store[params.variable][params.id].result.properties.name}</h1>
                    <p>{store[params.variable][params.id].result.description}</p>
                </div>
            </div>
            <div className="row border-top border-danger text-danger">
                {details()}
            </div>            
        </div>
    );
};

export default Details;