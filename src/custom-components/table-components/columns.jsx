import DataTable, { createTheme } from 'react-data-table-component';
import { updateItem } from '../../supabase/supabaseService';

export const columns = (props) => {    
    const column = [
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
        {
            name: 'Action',
            width: "",
            center: 1,
            cell: ((row, index, column, id) => {
                const timeStamped = new Date().toISOString();

                const handleElipsis = () => {
                    props.setColumnId(row.id)
                }

                const handleUpdate = async (id, newData) => {
                    try {
                        await updateItem(id, newData)
                    // Optional: show toast or confirmation
                    } catch (error) {
                        console.error('Update failed:', error)
                    }
                }

                const handleLogs = (email, logType) => {
                    if(logType === "in") {
                        handleUpdate(email, {time_in: timeStamped})
                    } else {
                        handleUpdate(email, {time_out: timeStamped})
                    }

                    handleElipsis()
                }
    
                return (
                    <div className="relative">
                        <svg onClick={handleElipsis} className="cursor-pointer" width="12" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 2C4 3.1 3.1 4 2 4C0.9 4 0 3.1 0 2C0 0.9 0.9 0 2 0C3.1 0 4 0.9 4 2ZM16 0C14.9 0 14 0.9 14 2C14 3.1 14.9 4 16 4C17.1 4 18 3.1 18 2C18 0.9 17.1 0 16 0ZM9 0C7.9 0 7 0.9 7 2C7 3.1 7.9 4 9 4C10.1 4 11 3.1 11 2C11 0.9 10.1 0 9 0Z" fill="#312A41"/>
                        </svg>
                        {
                            props.columnId === row.id && 
                                <div className="absolute w-[200px] right-[20px] bottom-[-20px] bg-[#ffffff] shadow py-[10px] z-[9]">
                                    <div onClick={() => handleLogs(row.email_address, "in")} className="hover:bg-[#d0d0d0] w-[100%] py-[10px] px-[15px]"> 
                                        <p>Time In</p>
                                    </div>
                                    <div onClick={() => handleLogs(row.email_address, "out")} className="hover:bg-[#d0d0d0] w-[100%] py-[10px] px-[15px]"> 
                                        <p>Time Out</p>
                                    </div>
                                </div>
                        }
                    </div>
                )
            })
        },
    ];

    return column;
}

createTheme('boehringer', {
    text: {
      primary: '#00ffa1',
      secondary: '#2aa198',
    },
    background: {
      default: '#0c5236',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#00ffa1',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');