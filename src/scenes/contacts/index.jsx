import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { useTheme } from "@mui/material";


import Header from "../../components/Header";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5 },
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Phone Number", flex: 0.5},
        {field: "email", headerName: "Email", flex: 1},
        {field: "address", headerName: "Address", flex: 1},
        {field: "zipCode", headerName: "Zip Code", flex: 0.5},
        {field: "city", headerName: "City", flex: 1},


    ];

    return (
        <Box m="20px">
            <Header title="Contacts" subtitle="Manage Contact Information" />
            <Box
            m="40px 0 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell" : {
                    borderBottomColor: colors.primary[500] + "!important"
                },
                "& .name-column--cell" : {
                    color: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders" : {
                    backgroundColor: colors.primary[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-footerContainer" : {
                    borderTop: "none"
                },
                "& .MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cellCheckbox" : {
                    outline: "none !important"
                },
                "& .MuiDataGrid-columnSeparator" : {
                    display: "none !important"
                },
                "& .MuiDataGrid-virtualScroller" : {
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text" : {
                    color: `${colors.grey[100]} !important`
                },
            }}
            >
                <DataGrid rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }} disableDensitySelector pageSize={10} rowsPerPageOptions={[10]} autoHeight />
            </Box>
        </Box>
    );
    };
    
    export default Contacts;