import React, { Component } from "react";

class CMSDetails extends Component {
    state = {
		id: -1,
		brand: "nisse",
		model: "",
		year: "nisse",
		Info: "",
		inEditMode: false
	};

	componentWillReceiveProps(nextProps) {
        console.log("ny prop",nextProps.item.brand,nextProps.item.model);
        console.log("förra prop", this.props.item);
        console.log("this.state.brand", this.state.brand);

        if (this.props.item!= null) console.log("nu finns props.item",this.props.item.id)
		//if (nextProps.item.id !== this.state.id) {
            console.log("lägg in i state",nextProps.item.brand,nextProps.item.model )
			this.setState = ({
				id: nextProps.item.id,
				brand: nextProps.item.brand,
				model: nextProps.item.model,
				year: nextProps.item.year       ,
				Info: nextProps.item.Info,
				inEditMode: false
			});
       // }
        console.log("state",this.state.brand)  

	}
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
        });
        console.log("event")
	};

	render() {
		const car = this.state.item;
		console.log("render this stATE",  this.state);

		let details = "Nothing selected";
		if (this.props.item!=null) {
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
                                    {this.state.brand}
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
								<td onClick={() => this.setState({ inEditMode: true })}>
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
