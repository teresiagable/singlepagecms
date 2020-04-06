import React, { Component } from "react";
import CMSDetails from "./CMSDetails";
import CMSList from "./CMSList";

class CMSMain extends Component {
	state = {
		items: [],
		itemsFetched: false,
		selectedItem: "",
	};

	componentDidMount() {
		// this.getData("./mycars.json");
		fetch("./mycars.json") //Request part
			.then((response) => response.json()) //console.log(response))
			.then((response) =>
				this.setState({ items: response.carList, itemsFetched: true })
			);
	}

	getData = (filename) => {};

	openDetails = (id) => {
		const selectedId = id;
		const newCar = {
			car: [
				{
					id: "",
					brand: "",
					model: "",
					year: "",
					Info: "",
				},
			],
		};
		console.log("openDetails id", id);
		//console.log(selectedId);
		let theCar =
			selectedId === "new"
				? newCar
				: this.state.items.find((x) => x.id === selectedId);
		console.log("theSelectedcar", theCar);
		this.setState({ selectedItem: theCar });
	};

	createNew = () => {
		console.log("create new");
		this.openDetails("new");
		//this.setState({ selectedItem: "new" });
	};

	sort = (column) => {
		this.setState({
			items: [...this.state.items].sort(function (x, y) {
				if (x[column] < y[column]) return -1;

				if (x[column] > y[column]) return 1;

				return 0;
			}),
		});
	};

	delete = (id) => {
		console.log("delte");
		let carList = this.state.items;

		this.setState({
			items: carList.filter((item) => item.id != id),
			itemsFetched: true,
			selectedItem: "",
		});
	};

	updateList = (carList, values) => {
		const elementsIndex = carList.findIndex((item) => item.id == values.id);
		carList[elementsIndex] = values;
	};

	saveChanges = (values) => {
		console.log("save new car");
		console.log(values);
		let carList = this.state.items;
		console.log("carList", carList);

		values.id == ""
			? carList.push(values)
			: this.updateList(carList, values);

		this.setState({
			items: carList,
			itemsFetched: true,
			selectedItem: values,
		});
	};

	render() {
		const { items, itemsFetched, selectedItem } = this.state;

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

				<CMSDetails item={selectedItem} onSubmit={this.saveChanges} />
			</div>
		);
	}
}

export default CMSMain;
