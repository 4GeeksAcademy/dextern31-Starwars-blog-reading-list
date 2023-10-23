const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			favoritesController: (name, link) => {
				let store = getStore();
				let newList = [];				
				
				let allNames = store.favorites.map((item)=>{
					return item.title;
				});
				console.log(allNames);
				if(allNames.includes(name)){
					newList = store.favorites.filter((item)=> item.title != name);
					setStore({favorites: newList})
				} else{
					newList = [...store.favorites, {"title": name, "link":link}];
					setStore({favorites: newList});
				}
				
			},
			deleteFavorite: (name) => {
				let store = getStore();
				let newList = store.favorites.filter((item)=> item.title != name);
				setStore({favorites: newList});
			},	
			getCharactersRequest: async () => {
				let store = getStore();
				await fetch('https://www.swapi.tech/api/people/', {
      				method: "Get",
      				headers: {
        				"Content-Type": "application/json"
      				}
    			})
    			.then(resp => {
        			console.log(resp.ok); 
        			console.log(resp.status);       			
        			return resp.json();
    			})
				.then(data => {
										 
					data.results.map((item) => {						
						getActions().singleCharacterRequest(item);
					});					
				})
				.catch(error => {
					console.log(error);
				});
				
			},
			singleCharacterRequest: async(item) => {
				let store = getStore();
				await fetch(item.url, {
      				method: "Get",
      				headers: {
        				"Content-Type": "application/json"
      				}
    			})
    			.then(resp => {
        			console.log(resp.ok);
        			console.log(resp.status);
        			return resp.json();
    			})
				.then(data => {
					//here is where your code should start after the fetch finishes
					let newList = [...store.characters, data];
					setStore({characters: newList});
					
				})
				.catch(error => {
					//error handling
					console.log(error);
				});
			},
			getPlanetsRequest: async () => {
				await fetch('https://www.swapi.tech/api/planets/', {
      				method: "Get",
      				headers: {
        				"Content-Type": "application/json"
      				}
    			})
    			.then(resp => {
        			console.log(resp.ok); 
        			console.log(resp.status);         			
        			return resp.json(); 
    			})
				.then(data => {
					 
					data.results.map((item) => {
						getActions().singlePlanetRequest(item);
					});
				})
				.catch(error => {
					console.log(error);
				});
			},
			singlePlanetRequest: async (item) => {
				let store = getStore();
				await fetch(item.url, {
      				method: "Get",
      				headers: {
        				"Content-Type": "application/json"
      				}
    			})
    			.then(resp => {
        			console.log(resp.ok);
        			console.log(resp.status);       			
        			return resp.json(); 
    			})
				.then(data => {
					let newList = [...store.planets, data];
					setStore({planets: newList});
					
				})
				.catch(error => {
					console.log(error);
				});
			},
			
		}
	};
};

export default getState;
