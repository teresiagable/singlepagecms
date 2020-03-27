import React, { Component } from "react";

class CMSDetails extends Component {
	state = {
		id: this.props.item.id,
		brand: this.props.item.brand,
		model: this.props.item.model,
		year: this.props.item.year,
		Info: this.props.item.Info,
		inEditMode: false
	};

	blankIfUndefined(value) {
		if (value == null) return "";
		else return value;
	}

	trueIfUndefined(value) {
		if (value == null) return true;
		else return false;
	}

	componentWillReceiveProps = nextProps => {
		console.log("ny prop item", nextProps.item);
		console.log(
			"ny och gammal brand",
			nextProps.item.brand,
			this.props.item.brand
		);
		console.log("förra prop", this.props.item);
		console.log("this.state", this.state);

		if (!this.state.inEditMode) {
			console.log(
				"lägg in i state",
				this.blankIfUndefined(nextProps.item.brand),
				nextProps.item.model
			);

			this.setState({
				id: this.blankIfUndefined(nextProps.item.id),
				brand: this.blankIfUndefined(nextProps.item.brand),
				model: this.blankIfUndefined(nextProps.item.model),
				year: this.blankIfUndefined(nextProps.item.year),
				Info: this.blankIfUndefined(nextProps.item.Info),
				inEditMode: this.trueIfUndefined(nextProps.item.id)
			});
		}
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
		console.log("event");
	};
	handleEditClick = event => {
		console.log("editevent", this.state.inEditMode);

		this.setState({ inEditMode: true });
	};

	handleCancelClick = event => {
		console.log("editevent", this.state.inEditMode);

		this.setState({
			id: this.props.item.id,
			brand: this.props.item.brand,
			model: this.props.item.model,
			year: this.props.item.year,
			Info: this.props.item.Info,
			inEditMode: false
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		this.props.onSubmit(this.state);
	};

	render() {
		const car = this.state.car;
		const editCSS = this.state.inEditMode ? "bg-secondary" : "bg-info";

		let details = "Nothing selected";
		if (this.props.item != null) {
			console.log("edit", this.state.inEditMode);
			details = (
				<form onSubmit={this.handleSubmit} className="w-50 d-flex">
					<table className="table border border-light container">
						{/* <div class="form-group row"> */}

						<thead>
							<tr className={editCSS}>
								<th className="justify-content-center text-dark">
									{this.state.inEditMode
										? "Enter car details:"
										: this.state.brand +
										  " " +
										  this.state.model +
										  " " +
										  this.state.year}
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
						</tbody>

						<tfoot className="w-100">
							<tr className="w-100">
								<td className="d-flex justify-content-between">
									<input
										type={
											this.state.inEditMode
												? "submit"
												: "hidden"
										}
										className="btn btn-secondary"
										value="Save"
									></input>

									{!this.state.inEditMode ? (
										<div onClick={this.handleEditClick}>
											<i className="fas fa-edit bg-red" />
											Edit
										</div>
									) : (
										<div onClick={this.handleCancelClick}>
											<i className="fas fa-undo-alt bg-red" />
											Undo
										</div>
									)}
								</td>
							</tr>
						</tfoot>
					</table>
				</form>
			);
		}
		return details;
	}
}

export default CMSDetails;
