import { Button, Flex, Text } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { InputField } from "../field/inputField"


export const ChangeEmail = () => {
    return (
        <Flex bg="red.100" mt="30px" direction="column">
            <Text>Email</Text>
            <Flex mt="15px" alignItems="center">
                <Formik>
                    {(props) => (
                        <Form>
                            <Flex alignItems="center">
                                <InputField name="email" type="text" id="email" className="email" />
                                <Button type="submit" />
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Flex> 
        </Flex>
    )
}