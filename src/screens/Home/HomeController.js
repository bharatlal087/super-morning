import { useNavigation } from "@react-navigation/native";
import { screenMap } from "../../navigation/screenMap";
import HomeViewModel from "./HomeViewModel";

const HomeController = () => {
    const navigation = useNavigation();
    const { dashboardItems } = HomeViewModel();

    const gotoProductDetails = (product) => {
        navigation.navigate(screenMap.ProductDetails, {product: product})
    }

    return {
        dashboardItems,
        gotoProductDetails
    }
}

export default HomeController;