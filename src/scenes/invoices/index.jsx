import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5 },
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},

        {field: "email", headerName: "Email", flex: 1},
        {field: "cost", headerName: "Cost", flex: 1, 
        rendercell: (params) => (
            <Typography color={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
        )
        
        },
        {field: "phone", headerName: "Phone Number", flex: 0.5},
        {field: "date", headerName: "Date", flex: 0.5},
    ];

    return (
        <Box m="20px">
            <Header title="Invoices" subtitle="Manage Invoices" />
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
                "& .MuiCheckbox-root" : {
                    color: `${colors.greenAccent[200]} !important`
                },
            }}
            >
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} components={{ Toolbar: GridToolbar }}  disableDensitySelector autoHeight pageSize={10} rowsPerPageOptions={[10]}  />
            </Box>
        </Box>
    );
    };
    
    export default Invoices;