import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { InputField } from "../field/inputField"
import { Formik, Form } from "formik"
import { AiOutlinePlus } from "react-icons/ai"
import Axios from "axios"
import * as Yup from "yup"
import { SelectField } from "../field/selectField"
import { useEffect, useState } from "react"

export const AddUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = localStorage.getItem("token")
    const [position, setPosition] = useState()
    const toast = useToast()

    const handleEmail = async (data) => {
        try {
            await Axios.post("http://localhost:9000/api/auth/user", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }})
            toast({
                title: "Success!",
                description: "Email successfuly sent!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        } catch (error) {
            console.log(error);
            toast({
                title: "Login Success!",
                description: "Failed to send email",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        }
    }

    const getPosition = async () => {
      try {
        const response = await Axios.get("http://localhost:9000/api/user/position")
        setPosition(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    const emailSchema = Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('Email is required'),
      });
    
    const initialValues = {
        email: "",
        posId: 1
    }
    
    useEffect(() => {
      getPosition()
    },[])
    return (
      <>
        <Button onClick={onOpen}>
            <AiOutlinePlus />
            <Text ml="10px" display={{base: "none", md: "block"}}>Employee</Text>
        </Button>
  
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter New Employee's Email</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <Formik initialValues={initialValues} validationSchema={emailSchema}
            onSubmit={(value, action) => {
              handleEmail(value)
              action.resetForm()
            }}>
                {(props) => {
                    return (
                        <Form>
                            <InputField label="Email" name="email" id="email" className="email" mb="10px" />
                            <SelectField label="Position" name="posId" id="posId" className="posId">
                              {position?.map(item => (
                                <option key={item.id} value={item.id}>{item.position}</option>
                              ))}
                            </SelectField>
                            <Button mt="10px" type="submit">Send</Button>
                        </Form>
                    )
                }}
            </Formik>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }