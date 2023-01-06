import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { alpha } from "@mui/material";


import Header from "../../components/Header";

const Employees = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    

    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell",
        renderCell: ({ row: { name, url }}) => {
            return (
                <Box
                p="0"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="4px"
                >

                <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                alt="profile-user"
                width="36px"
                height="36px"
                src={url}
                style={{ cursor: "pointer", borderRadius:"50%"}}
                />
                </Box>

                <Typography variant="p" sx={{ml: "10px"}}>
                {name}
                </Typography>
                </Box>
            )
        }},
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Phone Number", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {field: "access", headerName: "Access Level", flex: 1, 
        renderCell: ({ row: { access }}) => {
            return (
                <Box
                p="0"
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor={
                    access === "admin"
                    ? alpha(colors.greenAccent[700], 0.0)
                    : alpha(colors.greenAccent[700], 0.0)
                }
                borderRadius="4px"
                >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon sx={{ color: colors.primary[100], fontSize: 16 }}/>}
                {access === "manager" && <SecurityOutlinedIcon sx={{ color: colors.primary[100], fontSize: 16 }} />}
                {access === "user" && <LockOpenOutlinedIcon fontSize="small" sx={{ color: colors.primary[100], fontSize: 16 }} />}
                <Typography variant="p" color={colors.grey[100]} sx={{ml: "5px"}}>
                {access}
                </Typography>
                </Box>
            )
        }},

    ];

    return (
        <Box m="20px">
            <Header title="Employees" subtitle="Manage Employee Information" />
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
                <DataGrid rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }}  disableDensitySelector autoHeight pageSize={10} rowsPerPageOptions={[10]} rowSpacingType='margin'  />
            </Box>
        </Box>
    );
    };
    
    export default Employees;