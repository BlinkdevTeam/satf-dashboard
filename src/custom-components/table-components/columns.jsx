import DataTable, { createTheme } from 'react-data-table-component';

export const columns = [
    {
		name: 'Email',
		selector: (row => {
            // console.log("row title", row)
            return row.email_address
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

export const tableTheme = createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');