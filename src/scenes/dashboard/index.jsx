import { Box, Button, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import DashBoardMiniCard from "../../components/DashboardMiniCard";
import LineChart from "../../components/LineChart";
import Transactions from "../../components/Transactions";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
import { tokens } from "../../theme";

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import GeographyChart from "../../components/GeographyChart";



const Dashboard = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Box m="20px">
            
            <Box display="flex" justifyContent="space-between">
            <Box>
            <Header title="Dashboard" subtitle="Welcome to your dashboard" />
            </Box>
            <Box alignSelf="flex-end">
            <Button color="secondary" variant="contained"><DownloadOutlinedIcon sx={{mr: "5px"}} />Download Reports</Button>          
            </Box>
            </Box>

            <Box mt="40px" display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="130px" gap="15px">

            <Box gridColumn="span 3" backgroundColor={colors.primary[600]}><DashBoardMiniCard count="10,000" description="Emails Sent" progressbar="0.40" progress="+14%" icon={<EmailOutlinedIcon color="secondary" />}></DashBoardMiniCard></Box>
            <Box gridColumn="span 3" backgroundColor={colors.primary[600]}><DashBoardMiniCard count="400,000" description="Sales Obtained" progressbar="0.20"  progress="21%"  icon={<LocalPhoneOutlinedIcon color="secondary" />}></DashBoardMiniCard></Box>
            <Box gridColumn="span 3" backgroundColor={colors.primary[600]}><DashBoardMiniCard count="30,000" description="New Clients" progressbar="0.70"  progress="5%"  icon={<PersonAddOutlinedIcon color="secondary" />}></DashBoardMiniCard></Box>
            <Box gridColumn="span 3" backgroundColor={colors.primary[600]}><DashBoardMiniCard count="1,000,000" description="Traffic Recieved" progressbar="0.90"  progress="43%"  icon={<TrafficOutlinedIcon color="secondary" />}></DashBoardMiniCard></Box>

            <Box p="20px" gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[600]}>
                <Box >
                    <Typography variant="h5" fontWeight="600">Revenue Generated</Typography>
                    <Typography variant="h4" fontWeight="bold" color={colors.greenAccent[400]}>$ 1,463,526</Typography>
                </Box>
                
                <Box height="200px">
                <LineChart isDashboard={true} />
                </Box>
            </Box>
            <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[600]}><Transactions /></Box>

            <Box p="20px" gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[600]}>
                <Typography variant="h5" fontWeight="600">Campaign Revenue</Typography>
                <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                    <ProgressCircle size="125" />
                    <Typography variant="h5" color={colors.greenAccent[400]} sx={{mt: "15px"}}>$ 48,325</Typography>
                </Box>
            </Box>
            
            <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[600]}>
                <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px"}}>Sales Quantity</Typography>
                <Box height="250px" mt="-20px">
                    <BarChart isDashboard={true} />
                </Box>
            </Box>


            <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[600]} p="30px">
                <Typography variant="h5" fontWeight="600" sx={{ mb: "15px"}}>Geography Based Traffic</Typography>
                <Box height="180px">
                    <GeographyChart isDashboard={true} />
                </Box>
            </Box>

            </Box>


        </Box>


    )
    }
    
    export default Dashboard;