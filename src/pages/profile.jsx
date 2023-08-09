import { Flex, Heading } from "@chakra-ui/react"
import { ChangePic } from "../components/employee/changePic";
import { useSelector } from "react-redux";
import { ChangeEmail } from "../components/employee/changeEmail";
import { ChangeName } from "../components/employee/changeName";
import { Navigate } from "react-router-dom";


export const Profile = () => {
    const data = useSelector((state) => state.user.value)
    const token = localStorage.getItem("token")
    return token ? (
        <Flex direction="column" ml={{base: "15px", md: "120px", lg: "220px"}}
        p={{base: "10px", md: "20px"}} w={{base: "90vw", md: "83vw"}} mb={{ base: "60px", md: "0px"}}>
            <Heading fontSize="26px">Profile Settings</Heading>
            <ChangePic image={data.imgProfile} />
            <ChangeName />
            <ChangeEmail />
        </Flex>
    ) : (<Navigate to="/login" />)
}