import React, { Component } from "react";
import CMSDetails from "./CMSDetails";
import CMSList from "./CMSList";

class CMSMain extends Component {
	state = {
		items: [],
		itemsFetched: false,
		selectedItemId: -1
	};

	componentDidMount() {
		console.log("nu är jag här");

		fetch("./cars.json") //Request part
			.then(response => response.json()) //console.log(response))
			.then(response =>
				this.setState({ items: response.carList, itemsFetched: true })
			)
	}

	 openDetails(id) {
        console.log(id);
        let selected = id;
        
		this.setState({ selectedItemId: id });
	}

	
	render() {
		const { items, itemsFetched, selectedItemId } = this.state;

		if (!itemsFetched) {
			return "hej";
		}
console.log(items);
		return (
			<div className="d-flex flex-row border border-light justify-content-between">   
				<div>
					<CMSList itemList={items} onItemClick={this.openDetails} />
				</div>
				{/* <CMSDetails item={items[0]} /> */}
			</div>
		);
	}
}

export default CMSMain;
