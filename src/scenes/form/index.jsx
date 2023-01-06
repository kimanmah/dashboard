import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const phoneRegExp = /^(?=([^\d]*\d){8,14}[^\d]*$)[\d\(\)\s+-]{8,}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Ivalid email").required("Required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Required"),
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required"),

})

const Form = () => {

const isNoneMobile = useMediaQuery("(min-width:768px)"); 

const handleFormSubmit = ( values ) => {
    console.log(values);
}

return (
    <Box m="20px">
            <Header title="Create User" subtitle="Create a New User Profile" />        
    
    <Formik
    onSubmit={handleFormSubmit}
    initialValues={initialValues}
    validationSchema={userSchema}
    >
{({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <Box 
        mt="40px"
        display="grid" 
        gap="20px" 
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
            maxWidth: 'md',
            "& > div": {gridColumn: isNoneMobile ? undefined :"span 4"}
        }}
        >
            <TextField
                color="secondary"
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                    gridColumn: "span 2"
                }}
                >
            </TextField>
            <TextField
                color="secondary"
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                    gridColumn: "span 2"
                }}
                >
            </TextField>
            <TextField
                color="secondary"
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                    gridColumn: "span 4"
                }}
                >
            </TextField>
            <TextField
                color="secondary"
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                    gridColumn: "span 4"
                }}
                >
            </TextField>
            <TextField
                color="secondary"
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                    gridColumn: "span 4"
                }}
                >
            </TextField>
            <TextField
                color="secondary"
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{
                    gridColumn: "span 4"
                }}
                >
            </TextField>

            <Button type="submit" color="secondary" variant="contained">
                Create
            </Button>
        </Box>
    </form>
)}

    </Formik>
    
    </Box>
)

}

export default Form;