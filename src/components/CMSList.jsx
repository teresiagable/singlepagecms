import React from "react";

export default function CMSList(props) {
	const itemList = props.itemList;
	const sortCSS = "bg-secondary";
	//console.log(props);

	const sortColumn = column => {
		console.log(column);
		props.onSortColumn(column);
	};

	return (
		<div className="w-50">
			<table className="table table-hover">
				<thead>
					<tr className="table-info">
						<th
							className="bg-secondary"
							onClick={() => sortColumn("brand")}
						>
							Brand
						</th>
						<th
							className="w-20"
							onClick={() => props.onSortColumn("model")}
						>
							Model
						</th>
						<th className="w-20">Year</th>
						<th className="w-10">Delete</th>
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
								<td
									onClick={() => props.onDeleteClick(item.id)}
								>
									<i className="fas fa-trash-alt bg-red"></i>
								</td>
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
