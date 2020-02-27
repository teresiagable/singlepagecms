import React, { Component } from "react";

class CMSDetails extends Component {
	render() {
		const item = this.props.theCar;
		return (
			<div className="border border-secondary">
				
                {item.brand}
                {item.year}
			</div>
		);
	}
}

export default CMSDetails;
