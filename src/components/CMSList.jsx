import React from "react";

export default function CMSList(props) {
	const itemList = props.data;
console.log(props);
    
	return (
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
							{itemList.map((item, index) => {
								return (
									<tr
										key={item.id}
										onClick={() => this.props.handleListClick(item)}
									>
										<td>{item.brand}</td>
										<td>{item.model}</td>
										<td>{item.year}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
		</div>
	);
}
