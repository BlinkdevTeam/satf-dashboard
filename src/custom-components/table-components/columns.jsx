export const columns = [
    {
		name: 'Email',
		selector: (row => {
            // console.log("row title", row)
            return row.email
        }),
	},
	{
		name: 'First Name',
		selector: (row => {
            // console.log("row title", row)
            return row.first_name
        }),
	},
    {
		name: 'Middle Name',
		selector: (row => {
            // console.log("row title", row)
            return row.middle_name
        }),
	},
	{
		name: 'Last Name',
		selector: (row => {
            // console.log("row title", row)
            return row.last_name
        }),
	},
    {
		name: 'Time In',
		selector: (row => {
            // console.log("row title", row)
            return row.time_in
        }),
	},
    {
		name: 'Time Out',
		selector: (row => {
            // console.log("row title", row)
            return row.time_out
        }),
	},
];