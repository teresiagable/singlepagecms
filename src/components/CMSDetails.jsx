import React, { Component } from "react";

class CMSDetails extends Component {
	render() {
		const car = this.props.item;
		let details = "Nothing selected";
		let inEditMode = false;
		if (car != null) {
			if (car.id === "") inEditMode = true;

			console.log("edit", inEditMode);
			details = (
				<form className="w-50 d-flex">
					<table className="table table-hover border border-light  container">
						{/* <div class="form-group row"> */}

						<thead>
							<tr className="table-info w-100 ">
								<th className="justify-content-center text-dark">
									{inEditMode
										? "Enter car details:"
										: car.brand +
										  " " +
										  car.model +
										  " " +
										  car.year}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="row">
									<label
										for="brand"
										className="col-sm-2 col-form-label"
									>
										Brand:
									</label>
									<div className="col-sm">
										<input
											type="text"
											readOnly={inEditMode}
											className="form-control"
											id="brand"
											value={car.brand}
										/>
									</div>
								</td>
							</tr>

							<tr>
								<td className="row">
									<label
										for="brand"
										className="col-sm-2 col-form-label"
									>
										Model:
									</label>
									<div className="col">
										<input
											type="text"
											readOnly={inEditMode}
											className="form-control-plaintext"
											id="model"
											value={car.model}
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td className="row">
									<label
										for="brand"
										className="col-sm-2 col-form-label"
									>
										Year:
									</label>
									<div className="col">
										<input
											type="text"
											readOnly={inEditMode}
											className="form-control-plaintext"
											id="year"
											value={car.year}
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td className="row">
									<label
										for="brand"
										className="col-sm-2 col-form-label"
									>
										Info:
									</label>
									<div className="col-sm-10">
										<textarea
											className="form-control"
											rows="8"
											readOnly={inEditMode}
											id="info"
											value={car.Info}
										/>
									</div>
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
