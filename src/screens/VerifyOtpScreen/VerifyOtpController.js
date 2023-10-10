import { useNavigation } from "@react-navigation/native";
import { screenMap } from "../../navigation/screenMap";
import VerifyOtpViewModel from "./VerifyOtpViewModel";

const VerifyOtpController = () => {
    const navigation = useNavigation();
    const { verifyOTP }  = VerifyOtpViewModel();

    const gotoHome = () => {
        navigation.navigate(screenMap.Home)
    }

    return {
        verifyOTP,
        gotoHome
    }
}

export default VerifyOtpController;