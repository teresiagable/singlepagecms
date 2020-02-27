import React, { Component } from "react";
import CMSDetails from "./CMSDetails";
import CMSList from "./CMSList";


class CMSMain extends Component {
	state = {
        items: "",
        itemsFetched: false,
        selectedItemId:-1
    }
	
    componentDidMount()
    {
        console.log("nu är jag här");
          fetch('public/data/cars.json')//Request part
          .then(response => console.log(response))
          .then(response => response.json())             //Response part
          .then(response => this.setState({ items: response.carList, itemsFetched: true }))
          //    .then(response => console.log(response))
    }

	openDetails(id) {
        console.log(id);
        this.setState({selectedItemId:id});
    }
    
	render() {
        const {items, itemsFetched, selectedItemId, } = this.state;

        if(!itemsFetched){
            return "hej"
        }

		console.log(this.state);
		return (
			<div className="d-flex flex-row border border-light justify-content-between">
				<div>
                <CMSList itemList = {items} onItemClick = {this.openDetails}/>
				</div>
				<CMSDetails item = {selectedItemId}/>
			</div>
        );
        
	}
}

export default CMSMain;
