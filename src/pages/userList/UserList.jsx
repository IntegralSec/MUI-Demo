import './userList.css'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { userRows } from '../../dummyData2.js'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function DataGridDemo() {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item=>item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'User',
      width: 200,
      renderCell: (params) => { 
        return (
          <>
            <AccountBoxIcon className='userListUserAvatar'/>
            <p className='userListUsername'>{params.row.username}</p>
          </>
          )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Full name',
      width: 120,
      editable: true,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/"+params.row.id}>
              <button className="userListEditButton">Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListEditDelete" 
              onClick={() => handleDelete(params.row.id)} />
          </>
          
        )
      }
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
