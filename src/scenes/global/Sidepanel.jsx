import { useState } from "react";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme} from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";



const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <MenuItem routerLink={<Link to={to} />} active={selected === title} style={{ color: colors.grey[100]}} onClick={()=> setSelected(title)} icon={icon}>
        <Typography>{title}</Typography>
        
        {/* <Link to={to} /> */}
        </MenuItem>
    );
} 


const Sidepanel = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [isCollapsed, setIsCollapsed] = useState(false);
const [selected, setSelected] = useState("Dashboard");



return (
    <Box
    sx={{
        "& .ps-sidebar-container": {
            background: `${colors.primary[400]} !important`
        },
        "& .ps-submenu-content": {
            background: `${colors.primary[400]} !important`
        },
        "& .ps-sidebar-root": {
            border: "0 !important"
        },
        "& .ps-menu-button:hover:not(.ps-active a) ": {
            color: `${colors.grey[400]} !important`,
            background: "transparent !important"
        },
        "& .ps-active a": {
            color: `${colors.grey[100]} !important`,
            background: `${colors.menu[100]} !important`
        }
    }}
    >

<ProSidebarProvider>
<Sidebar width="220px" collapseSidebar={isCollapsed}>
    <Menu iconShape="square">
        { /* LOGO AND MENU ICON */}
        <MenuItem
        style={{
            margin: "0px 0 0px 0",
            color: colors.grey[100]
        }}
        >
        {!isCollapsed && (
            <Box display="flex" justifyContent="space-between" alignItems="center" ml="0" mt="16px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                alt="company logo"
                width="40px"
                height="40px"
                src={`../../assets/logo192.png`}
                style={{ borderRadius:"50%"}}
                />
            </Box>
                { /*
                <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                </IconButton>
                */}
            </Box>
        )}
        </MenuItem>
    </Menu>

</Sidebar>

<Sidebar>
  <Menu>
    { /* USER 
    {!isCollapsed && (
        <Box sx={{ mt: 2 }} mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                alt="profile-user"
                width="80px"
                height="80px"
                src={`../../assets/user.jpg`}
                style={{ cursor: "pointer", borderRadius:"50%"}}
                />
            </Box>

            <Box textAlign="center">
                <Typography variant="h6" color={colors.grey[100]} fontWeight="bold"  sx={{ m: "10px 0 0 0" }}>Kim André Mahal</Typography>
                <Typography color={colors.greenAccent[500]}>Administrator</Typography>
            </Box>
        </Box>
    )
    
    }
    */}

    {/* MENU ITEMS */}
 <Box mt="27px" ml={isCollapsed ? undefined : "0px"}> 
<Item title="Home" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Typography variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>People</Typography>
<Item title="Employees" to="/employees" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Item title="Contacts" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Typography variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>Company</Typography>
<Item title="Invoices" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Item title="FAQ" to="/faq" icon={<HelpOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Typography variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>Reports</Typography>
<Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
<Item title="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />

    </Box>


  </Menu>
</Sidebar>
</ProSidebarProvider>

    </Box>
)
};

export default Sidepanel;