import { Button, Flex, Text } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { InputField } from "../field/inputField"


export const ChangeName = () => {
    return (
        <Flex bg="red.100" mt="30px" direction="column">
            <Text>Name</Text>
            <Flex mt="15px" alignItems="center">
                <Formik>
                    {(props) => (
                        <Form>
                            <Flex alignItems="center">
                                <InputField name="firstName" type="text" id="firstName" className="firstName" />
                                <InputField name="lastName" type="text" id="lastName" className="lastName" />
                                <Button type="submit" />
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Flex> 
        </Flex>
    )
}