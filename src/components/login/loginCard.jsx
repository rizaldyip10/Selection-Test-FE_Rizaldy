import { Button, Flex, Heading, Text, useToast } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { InputField } from "../field/inputField";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";


export const LoginCard = () => {
    const dispatch = useDispatch()
    const toast = useToast()
    const navigate = useNavigate()
    const loginSchema = Yup.object().shape({
      email: Yup.string().email('Email is invalid').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password contains minimal 6 characters')
        .required('Password is required'),
    });
  
    const initialValues = {
      email: '',
      password: '',
    };

    const handleSubmit = async (data) => {
        try {
            const response = await Axios.post("http://localhost:9000/api/auth/login", data)
            dispatch(setValue(response.data.result))
            localStorage.setItem("token", response.data.token)
            toast({
                title: "Login Success!",
                description: "You have successfully logged in!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
            setTimeout(()=>{
                navigate("/")
            }, 1500)
        } catch (error) {
            toast({
                title: "Login Failed!",
                description: error.response.data.message,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        }
    }
  
    return (
      <Flex justifyContent="center" align="center" direction="column">
        <Flex direction="column" alignItems="center" bg="#FBD914" p="20px"
        borderRadius="10px" color="#0058AB" boxShadow="1px 1px 5px #011930">
          <Heading>Hello Again!</Heading>
          <Text mt="10px">Please log in to your account</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values, action) => {
                handleSubmit(values)
                action.resetForm()
            }}
          >
            {(props) => (
              <Form>
                <Flex direction="column" mt="15px">
                  <InputField
                    label="Email"
                    name="email"
                    id="email"
                    className="email"
                    type="text"
                    w="300px"
                    mb="10px"
                  />
                  <InputField
                    label="Password"
                    name="password"
                    id="password"
                    className="password"
                    type="password"
                    w="300px"
                  />
                  <Button type="submit" mt="15px" bg="#0058AB" color="#FBD914">Submit</Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    );
  };