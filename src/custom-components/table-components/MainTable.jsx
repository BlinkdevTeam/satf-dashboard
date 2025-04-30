import { useEffect, useState } from "react"
import DataTable from 'react-data-table-component';
import { columns } from './columns';
import { getItems } from '../../supabase/supabaseService';

const data = [
  	{
		id: 1,
		first_name: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		last_name: 'Ghostbusters',
		year: '1984',
	},
]

const MainTable = () => {
	const [participants, setParticipants] = useState([])

	console.log("participants", participants)
	useEffect(() => {
		getItems().then(setParticipants).catch(console.error)
	}, [])

	return (
		<DataTable
			columns={columns}
			data={participants}
			selectableRows
		/>
	);
};

export default MainTable