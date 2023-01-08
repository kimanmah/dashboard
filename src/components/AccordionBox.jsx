import { useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { tokens } from "../theme";

const AccordionBox = ({ question, answer }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    return (
        <Accordion sx={{ backgroundColor:colors.primary[700] }}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}> 
            <Typography color={colors.grey[100]} fontWeight="bold">{question}</Typography> 
        </AccordionSummary>  
    <AccordionDetails>
        <Typography>{answer}</Typography>
    </AccordionDetails>
    </Accordion> 
    )
}

export default AccordionBox;