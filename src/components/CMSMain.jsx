import React, { Component } from "react";
import CMSDetails from "./CMSDetails";
import CMSList from "./CMSList";

class CMSMain extends Component {
	state = {
		items: [],
		itemsFetched: false,
		selectedItem: ""
	};

	componentDidMount() {
		fetch("./cars.json") //Request part
			.then(response => response.json()) //console.log(response))
			.then(response =>
				this.setState({ items: response.carList, itemsFetched: true })
			);
	}

	openDetails = id => {
		const selectedId = id;
		const newCar = {
			car: [
				{
					id: "",
					brand: "",
					model: "",
					year: "",
					Info: ""
				}
			]
		};
		console.log(id);
		console.log(selectedId);
		let theCar =
			selectedId === "new"
				? newCar
				: this.state.items.find(x => x.id === selectedId);
		console.log("theSelectedcar", theCar);
		this.setState({ selectedItem: theCar });
	};

	createNew = () => {
		console.log("create new");
		this.setState({ selectedItem: "new" });
	};
	sort = column => {
		const newItems = this.state.items.sort((a, b) => b[column] - a[column]);

		console.log(newItems);
		this.setState({
			items: this.state.items.sort((a, b) => b[column] - a[column])
		});
	};
	render() {
		const { items, itemsFetched, selectedItem } = this.state;

		if (!itemsFetched) {
			return <div> "vänta lite" </div>;
		}

		//console.log("itemsFetched", itemsFetched);

		return (
			<div className="d-flex flex-row border border-light w-100">
				<CMSList
					itemList={items}
					onItemClick={this.openDetails}
					onNewClick={this.createNew}
					onDeleteClick={this.delete}
					onEditClick={this.edit}
					onSortColumn={this.sort}
				/>

				<CMSDetails item={selectedItem} />
			</div>
		);
	}
}

export default CMSMain;
