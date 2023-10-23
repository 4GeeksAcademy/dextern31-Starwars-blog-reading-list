import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const favoriteList = () => {
		if(store.favorites.length==0) {
			return (
				<li>No favorites yet</li>
			);
		} else {
			return (store.favorites.map((item,index) => {							
				return (
					<li key={index} className="row d-flex align-items-center flex-nowrap">
						<div className="col">											
							<Link className="dropdown-item" to={item.link}>{item.title}</Link>																						
						</div>
						<div className="col text-end">
							<span onClick={() => actions.deleteFavorite(item.title)}><i className="fa fa-trash dropdown-item"></i></span>
						</div>
					</li>
				);
			}));
		}
	};
	return (
		
		<nav className="navbar navbar-light bg-light navbar-expand-lg">
			<div className="container">
				<Link className="navbar-brand" to={"/"}><img style={{"width":"70px", "height":"auto"}} src="https://cdn.freebiesupply.com/logos/thumbs/2x/star-wars-4-logo.png"/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">									
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">					
						<li className="nav-item dropdown">
							<a className="dropdown-toggle btn btn-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="bg-secondary p-1">{store.favorites.length}</span>
							</a>
							<ul className="dropdown-menu">
							{favoriteList()}
							</ul>
						</li>					
					</ul>				
				</div>
			</div>
	  </nav>
	  
	);
};
