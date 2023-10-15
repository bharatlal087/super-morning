import { useNavigation } from "@react-navigation/native";
import { screenMap } from "../../navigation/screenMap";
import HomeViewModel from "./HomeViewModel";

const HomeController = () => {
    const navigation = useNavigation();
    const { dashboardItems } = HomeViewModel();

    const gotoProductDetails = (product) => {
        navigation.navigate(screenMap.ProductDetails, {product: product})
    }
    const gotoCategory = (id, name, isBrand) => {
        navigation.navigate(screenMap.ProductListScreen, {category: {id, name, isBrand}})
    }
    const onSubscribe = (product) => {
        navigation.navigate(screenMap.SubscribeScreen, {product: product})
    }
    const onReviewCart = () => {
        navigation.navigate(screenMap.ReviewCartScreen)
    }
    return {
        dashboardItems,
        gotoProductDetails,
        gotoCategory,
        onSubscribe,
        onReviewCart
    }
}

export default HomeController;