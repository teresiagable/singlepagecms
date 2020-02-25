import CMSDetails from "./CMSDetails";
import React, { Component } from "react";

const CMSList = (props) => {
    const listData = props.data;
    
    return(    listData  );

};

class CMSMain extends Component {

	state = {
		data: "nisse"
	};

	render() {
		return (
			<div id="cmsmain" className="d-flex flex-row bg-secondary">

				<CMSList data={this.state.data}></CMSList>
                <CMSDetails ></CMSDetails>
			</div>
		);
	}
}

export default CMSMain;
