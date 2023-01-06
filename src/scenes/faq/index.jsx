import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import AccordionBox from "../../components/AccordionBox";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions" />
    
    <Box mt="40px">
    <AccordionBox question="Morbi pulvinar consequat malesuada?" answer="Morbi lobortis commodo dolor quis porttitor. Phasellus vitae nisi vitae dui mollis facilisis."></AccordionBox>
    <AccordionBox question="Suspendisse gravida iaculis metus quis mattis?" answer="Maecenas non ligula maximus, rutrum nunc eget, congue felis. Suspendisse lacus ligula, condimentum quis volutpat rutrum, varius id leo."></AccordionBox>
    <AccordionBox question="Duis at erat nibh?" answer="Nam risus ante, ultrices a magna ac, euismod malesuada arcu. Nullam ut venenatis ligula."></AccordionBox>
    <AccordionBox question="Mauris dignissim eleifend dui tristique ornare?" answer="Etiam porta quis mi id varius. Sed pulvinar dolor ut elit rhoncus tempor."></AccordionBox>
    <AccordionBox question="Pellentesque neque eros?" answer="Aenean imperdiet id massa quis iaculis. Cras velit ante, tristique in magna non, commodo pretium urna."></AccordionBox>
    <AccordionBox question="Phasellus sed accumsan dui?" answer="Maecenas consectetur elit eu ornare congue. Suspendisse hendrerit sollicitudin commodo. Aliquam erat volutpat."></AccordionBox>
    </Box>
    </Box>
    )
}

export default FAQ;