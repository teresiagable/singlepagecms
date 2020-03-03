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
		fetch("./cars.json") //Request part
			.then(response => response.json()) //console.log(response))
			.then(response =>
				this.setState({ items: response.carList, itemsFetched: true })
			);
	}

	openDetails = id => {
		console.log(id);
		this.setState({ selectedItemId: id });
	};

	render() {
		const { items, itemsFetched, selectedItemId } = this.state;

		if (!itemsFetched) {
			return <div> "vänta lite" </div>;
		}

		console.log("itemsFetched", itemsFetched);
		console.log(selectedItemId);
		let theCar = items.find(x => x.id === selectedItemId);
		console.log("thecar", theCar);
		//console.log("thecar0",theCar[0])

		return (
			<div className="d-flex flex-row border border-light justify-content-between w-100">
				<CMSList itemList={items} onItemClick={this.openDetails} />
				<CMSDetails item={theCar} />
			</div>
		);
	}
}

export default CMSMain;
