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
		console.log("openDetails id", id);
		//console.log(selectedId);
		let theCar =
			selectedId === "new"
				? newCar
				: this.state.items.find(x => x.id === selectedId);
		console.log("theSelectedcar", theCar);
		this.setState({ selectedItem: theCar });
	};

	createNew = () => {
		console.log("create new");
		this.openDetails("new");
		//this.setState({ selectedItem: "new" });
	};
	sort = column => {
		this.setState({
			items: [...this.state.items].sort(function(x, y) {
				if (x[column] < y[column]) return -1;

				if (x[column] > y[column]) return 1;

				return 0;
			})
		});
	};

	render() {
		const { items, itemsFetched, selectedItem } = this.state;

		function saveChanges(values) {
			console.log("save new car");
			console.log(values);

			fetch("./cars.json", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ values })
			});
		}

		if (!itemsFetched) {
			return <div> "vänta lite" </div>;
		}

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

				<CMSDetails item={selectedItem} onSubmit={saveChanges} />
			</div>
		);
	}
}

export default CMSMain;
