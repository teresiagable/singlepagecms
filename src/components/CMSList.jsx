import React from "react";

export default function CMSList(props) {
	const itemList = props.itemList;
	console.log(props);

	return (
		<div className="w-50">
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
								onClick={() => props.onItemClick(item.id)}
							>
								<td>{item.brand}</td>
								<td>{item.model}</td>
								<td>{item.year}</td>
								<td>X</td>
								<td>Update</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<input
				type="button"
				className="btn btn-secondary"
				value="Add new car"
				onClick={props.onNewClick}
			/>
		</div>
	);
}
