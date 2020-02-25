import React from "react";

export default function CMSList(props) {
	const listData = props.data;

	return (
		<div>
			<table className="table table-hover">
				<thead>
					<tr	className="table-info">
						<th scope="col">Brand</th>
						<th scope="col">Model</th>
						<th scope="col">Year</th>
					</tr>
				</thead>
				<tbody>
                    {listData.map(car => {
                        return(
					<tr >
						<td>{car.brand}</td>
						<td>{car.model}</td>
						<td>{car.year}</td>
                    </tr>)
                    })
                    }
				</tbody>
			</table>
		</div>
	);
}
