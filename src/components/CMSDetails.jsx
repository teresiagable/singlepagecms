import React, { Component } from "react";

class CMSDetails extends Component {
	render() {
		const car = this.props.item;
		let details = "nothing selected";
		if (car != null) {
			console.log(car.brand);
			details = (
				<form className="w-50">
					<table className="table table-hover d-flex flex-row ">
                    {/* <div class="form-group row"> */}

						<thead>
							<tr className="table-info w-100">
								<th scope="row">
									{car.brand + " " + car.model + " " + car.year}
								</th>
							</tr>
						</thead>

							<tr>
								<label for="brand" class="col-sm-2 col-form-label">
									Brand:
								</label>
								<div class="col-sm-10">
									<input
										type="text"
										readonly=""
										className="form-control-plaintext"
										id="brand"
										value={car.brand}
									/>
								</div>
							</tr>

							<tr>
								<label for="brand" className="col-sm-2 col-form-label">
									Model:
								</label>
								<div class="col-sm-10">
									<input
										type="text"
										readonly=""
										className="form-control-plaintext"
										id="model"
										value={car.model}
									/>
								</div>
								>
							</tr>
							<tr>
								<label for="brand" class="col-sm-2 col-form-label">
									Year:
								</label>
								<div class="col-sm-10">
									<input
										type="text"
										readonly=""
										className="form-control-plaintext"
										id="year"
										value={car.year}
									/>
								</div>
							</tr>
							<tr>
								<label for="brand" class="col-sm-2 col-form-label">
									Info:
								</label>
								<div class="col-sm-10">
									<textarea
										className="form-control"
										rows="8"
										id="info"
										value={car.Info}
									/>
								</div>
							</tr>
						{/* </div> */}
					</table>
				</form>
			);
		}
		return details;
	}
}

export default CMSDetails;
