import React, { Component } from "react";

class CMSDetails extends Component {
	render() {
		const theCar = this.props.theCar;
		return (
			<div className="border border-secondary">
				
                {theCar.brand}
                {theCar.year}
			</div>
		);
	}
}

export default CMSDetails;
