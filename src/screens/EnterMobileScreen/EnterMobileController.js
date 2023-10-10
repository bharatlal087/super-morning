import { useNavigation } from "@react-navigation/native";
import { screenMap } from "../../navigation/screenMap";
import EnterMobileViewModel from "./EnterMobileViewModel";

const EnterMobileController = () => {
    const navigation = useNavigation();
    const { generateOTP } = EnterMobileViewModel();

    const gotoVerifyOTP = (mobile, token) => {
        navigation.navigate(screenMap.VerifyOTP, { mobile: mobile, token: token })
    }

    return {
        generateOTP,
        gotoVerifyOTP
    }
}

export default EnterMobileController;