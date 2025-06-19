import { useState, useEffect, useRef } from "react"
import DataTable, { createTheme } from 'react-data-table-component';
import { updateItem } from '../../supabase/supabaseService';

export const columns = (props) => {        
    const column = [
        {
            name: 'Email',
            sortable: true,
		    reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.email
            }),
        },
        {
            name: 'First Name',
            sortable: true,
		    reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.first_name_upper
            }),
        },
        {
            name: 'Last Name',
            sortable: true,
		    reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.last_name_upper
            }),
        },
       {
            name: 'Selected Event Date',
            sortable: true,
            reorder: true,
            cell: row => {
                const eventMap = {
                event1: "JULY 17, 2025",
                event2: "JULY 24, 2025",
                };

                let eventDates = [];

                // Handle both string and array
                if (Array.isArray(row.selected_events)) {
                eventDates = row.selected_events.map(event => eventMap[event]).filter(Boolean);
                } else if (typeof row.selected_events === 'string') {
                eventDates = [eventMap[row.selected_events]].filter(Boolean);
                }

                const display = eventDates.length > 1
                ? eventDates.join(" & ")
                : eventDates[0] || "—";

                return (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {display}
                </span>
                );
            },
        },
        {
            name: 'Time In',
            sortable: true,
		    reorder: true,
            selector: (row => {
                return row.time_in ? new Date(row.time_in).toLocaleString() : ''
            }),
        },
        {
            name: 'Time Out',
            sortable: true,
		    reorder: true,
            selector: (row => {
                return row.time_out ? new Date(row.time_out).toLocaleString() : ''
            }),
        },
    ];

    return column;
}

createTheme('boehringer', {
    text: {
      primary: '#dbdbdb',
      secondary: '#dbdbdb',
    },
    background: {
      default: '#f2f2f2',
    },
    context: {
      background: '#cb4b16',
      text: '#dbdbdb',
    },
    striped: {
        text: '#dbdbdb',
        default: '#093931', // <--- customize this striped row color
      },
    divider: {
      default: '#dbdbdb',
    },
    highlightOnHover: {
        default: '#00e47c',
    },
    action: {
      button: '#dbdbdb',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
    pagination: {
        default: "#dbdbdb"
    }
  });


  