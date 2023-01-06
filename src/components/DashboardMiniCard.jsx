import { useTheme, Typography, Box } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const DashBoardMiniCard = ({ icon, count, description, progress, progressbar }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box display="flex" justifyContent="space-between" p="20px" flexGrow="0" flexBasis="25%">
            <Box>
            {icon}
            <Typography color={colors.grey[100]} variant="h5" fontWeight="bold">{count}</Typography>
            <Typography color={colors.greenAccent[400]}>{description}</Typography>
            </Box>
            <Box>
            <ProgressCircle progress={progressbar} />
            <Typography mt="5px" textAlign="center" color={colors.greenAccent[400]}>{progress}</Typography>
            </Box>
        </Box>
    )
}

export default DashBoardMiniCard;