import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockData";

const Transactions = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    

    const columns = [
        {field: "txId", headerName: "ID", headerAlign: "left", align: "left", flex: 1,
        renderCell: ({ row: { txId, user }}) => {
            return (
                <Box>

                <Box><Typography variant="p" color={colors.greenAccent[400]}>{txId}</Typography></Box>
                <Box><Typography variant="p">{user}</Typography></Box>

                </Box>
            )
        }},
        {field: "date", headerName: "Date", type: "date", headerAlign: "left", align: "left", flex: 1},
        {field: "cost", headerName: "Cost", flex: 1, headerAlign: "left", align: "left", flex: 1,
        renderCell: ({ row: { cost }}) => {
            return (
                <Typography variant="p">$ {cost}</Typography>
            )
        }
    
    },
    ];

    return (
        <Box m="20px">
            <Box
            m="0 0 0 0" height="260px" sx={{
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
                "& .MuiDataGrid-row:hover": {
                    backgroundColor: `${colors.primary[400]} !important`,
                  }
            }}
            >
                <Box p="10px" mb="1px" sx={{ backgroundColor: colors.primary[700] }}>Recent Transactions</Box>
                <DataGrid 
                rows={mockTransactions} 
                columns={columns} 
                autoHeight 
                pageSize={3} 
                rowSpacingType='margin' 
                getRowId={(row) => row.txId}  
                headerHeight={0} 
                hideFooter 
                disableColumnSelector
                disableSelectionOnClick
                
                />
            </Box>
        </Box>
    );
    };
    
    export default Transactions;