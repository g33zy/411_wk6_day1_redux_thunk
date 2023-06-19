import React from 'react'

import {Button, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Container, Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import Total from '../containers/Total'
import AddCar from '../containers/AddCar'
import Chart from '../containers/Chart'
import Car from '../containers/Car';
// import { MoreVert } from "@mui/icons-material"
import MoreVert from '@mui/icons-material/MoreVert'
import { deleteMakes } from '../redux/actions';


const Import = (props) => {
    // fill out this component
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }

    return (
        
        <Container sx={{marginTop: '4rem'}} maxWidth="lg" className="import-container">
            <Button onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
            <h4>COUNT {props.makes.length}</h4>
            {/* <div className="flex-container">
                <Chart />
                <Total />
                <AddCar carTotal={props.cars.length} />
            </div> */}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.makes.map((make, idx) => (
                    <TableRow key={idx}>
                        <TableCell component="th" scope="row">
                            {make.MakeId}
                        </TableCell>
                        <TableCell>{make.MakeName}</TableCell>
                        {/* <TableCell>{car["horsepower"]}</TableCell> */}
                        <TableCell>
                            <MoreVert
                                 id="basic-button"
                                 aria-controls={open ? 'basic-menu' : undefined}
                                 aria-haspopup="true"
                                 aria-expanded={open ? 'true' : undefined}
                                 onClick={handleClick}
                                 style={{cursor: 'pointer'}}
        
                                // add onClick method here
                                // onClick={() => props.removeCar(idx)}
                                // className="icon text-red" 
                                />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>

            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={props.deleteMakes}>Delete</MenuItem>
        
      </Menu>
        </Container>

    )
}

export default Import