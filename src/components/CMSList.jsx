import React from "react";

export default function CMSList(props) {
	const itemList = props.itemList;
	const sortCSS = "bg-secondary";

	const sortColumn = (e) => {
		console.log(e);
		//props.onSortColumn(column);
	};

	return (
		<div className="w-50">
			<table className="table table-hover">
				<thead>
					<tr className="table-info">
						<th
							className="w-20"
							onClick={() => props.onSortColumn("brand")}
						>
							Brand
						</th>
						<th
							className="w-20"
							onClick={() => props.onSortColumn("model")}
						>
							Model
						</th>
						<th
							className="w-20"
							onClick={() => props.onSortColumn("year")}
						>
							Year
						</th>
						<th
							className="w-10"
							onClick={() => props.onSortColumn("model")}
						>
							Delete
						</th>
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
