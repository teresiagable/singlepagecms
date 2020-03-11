import React, { Component } from "react";

class CMSDetails extends Component {
	state = {
		id: this.props.item.id,
		brand: this.props.item.brand,
		model: this.props.item.model,
		year: this.props.item.year,
		Info: this.props.item.Info
		//     // ,
		//     // inEditMode: false
		// ]
	};

	//state = this.initialState;

	componentWillReceiveProps = nextProps => {
		console.log("ny prop", nextProps.item.brand, nextProps.item.model);
		console.log("ny och gammal brand", nextProps.brand, this.props.brand);
		console.log("förra prop", this.props.item);
		console.log("this.state", this.state);

		if (this.props.item != null)
			console.log("nu finns props.item", this.props.item.id);
		//if (nextProps.item.id !== this.state.id) {
		console.log(
			"lägg in i state",
			nextProps.item.brand,
			nextProps.item.model
		);

		this.setState({		
            id:nextProps.item.id,
			brand: nextProps.item.brand,
			model: nextProps.item.model,
            year: nextProps.item.year,
            Info: nextProps.item.Info
		});

		console.log("state", this.state);
	};

	handleChange = event => {
		const { name, value } = event.target;
		// this.setState({
		// 	[name]: value
		// });
		console.log("event");
	};
	handleEditClick = event => {
		this.setState({ inEditMode: true });
	};

	render() {
		const car = this.state.car;
		console.log("render this stATE", this.state);

		let details = "Nothing selected";
		if (this.props.item != null) {
			//if (this.state.id === "") inEditMode = true;

			console.log("edit", car);
			details = (
				<form className="w-50 d-flex">
					<table className="table table-hover border border-light container">
						{/* <div class="form-group row"> */}

						<thead>
							<tr className="table-info w-100 ">
								<th className="justify-content-center text-dark">
									{this.state.inEditMode
										? "Edit car details:"
										: "car"
									// Car.brand + " " + car.model + " " + car.year
									}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="row ">
									<label
										htmlFor="brand"
										className="col-sm-2 col-form-label"
									>
										Brand:
									</label>
									<div className="col-sm">
										<input
											type="text"
											readOnly={!this.state.inEditMode}
											className="form-control"
											onChange={this.handleChange}
											name="brand"
											value={this.state.brand}
										/>
									</div>
								</td>
							</tr>

							<tr>
								<td className="row">
									<label
										htmlFor="model"
										className="col-sm-2 col-form-label"
									>
										Model:
									</label>
									<div className="col-sm">
										<input
											type="text"
											readOnly={!this.state.inEditMode}
											className="form-control"
											onChange={this.handleChange}
											name="model"
											value={this.state.model}
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td className="row">
									<label
										htmlFor="year"
										className="col-sm-2 col-form-label"
									>
										Year:
									</label>
									<div className="col-sm">
										<input
											type="text"
											readOnly={!this.state.inEditMode}
											className="form-control"
											onChange={this.handleChange}
											name="year"
											value={this.state.year}
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td className="row">
									<label
										htmlFor="Info"
										className="col-sm-2 col-form-label h-75"
									>
										Info:
									</label>
									<textarea
										className="form-control"
										onChange={this.handleChange}
										rows="8"
										readOnly={!this.state.inEditMode}
										name="Info"
										value={this.state.Info}
									/>
								</td>
							</tr>
							<tr>
								<td onClick={() => this.handleEditClick}>
									<i className="fas fa-edit bg-red" />
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			);
		}
		return details;
	}
}

export default CMSDetails;
