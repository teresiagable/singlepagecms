import React, { Component } from "react";
import CMSDetails from "./CMSDetails";
import CMSList from "./CMSList";

class CMSMain extends Component {
	state = {
		item: ""
	};

	handleListClick(props) {
        console.log(props);
        this.setState({item:props});
	}
	render() {
		const carList = [
			{
				brand: "Saab",
				model: "900 Turbo",
				year: "1992"
			},
			{
				brand: "Volvo",
				model: "745 GL",
				year: "1988"
			},
			{
				brand: "BMW",
				model: "525i",
				year: "2001"
			},
			{
				brand: "Nissan",
				model: "Leaf",
				year: "2012"
			},
			{
				brand: "Fiat",
				model: "Uno",
				year: "1985"
			}
		];
		console.log(this.state.item);
		return (
			<div className="d-flex flex-row border border-light justify-content-between">
				<div>
					<table className="table table-hover">
						<thead>
							<tr className="table-info">
								<th scope="col">Brand</th>
								<th scope="col">Model</th>
								<th scope="col">Year</th>
							</tr>
						</thead>
						<tbody>
							{carList.map((car, index) => {
								return (
									<tr
										key={car.model + index}
										onClick={() => this.handleListClick(car)}
									>
										<td>{car.brand}</td>
										<td>{car.model}</td>
										<td>{car.year}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<CMSDetails theCar = {this.state.item}></CMSDetails>
			</div>
		);
	}
}

export default CMSMain;
