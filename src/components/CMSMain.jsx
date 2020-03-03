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

	CreateNew = () => {
		console.log("create new");
		this.setState({ selectedItemId: "new" });
	};

	render() {
		const { items, itemsFetched, selectedItemId } = this.state;

		const newCar = { id: "", brand: "", model: "", year: "", Info: "" };

		if (!itemsFetched) {
			return <div> "vänta lite" </div>;
		}

		console.log("itemsFetched", itemsFetched);
		console.log(selectedItemId);
		let theCar =
			selectedItemId === "new"
				? newCar
				: items.find(x => x.id === selectedItemId);
		console.log("thecar", theCar);
		//console.log("thecar0",theCar[0])

		return (
			<div className="d-flex flex-row border border-light w-100">
				<CMSList
					itemList={items}
					onItemClick={this.openDetails}
					onNewClick={this.CreateNew}
				/>
				<CMSDetails item={theCar} />
			</div>
		);
	}
}

export default CMSMain;
