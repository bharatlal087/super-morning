import { useNavigation } from "@react-navigation/native";
import { screenMap } from "../../navigation/screenMap";
import HomeViewModel from "./HomeViewModel";

const HomeController = () => {
    const navigation = useNavigation();
    const { dashboardItems } = HomeViewModel();

    // const gotoVerifyOTP = (mobile, token) => {
    //     navigation.navigate(screenMap.VerifyOTP, { mobile: mobile, token: token })
    // }

    return {
        dashboardItems
    }
}

export default HomeController;