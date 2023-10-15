import { useNavigation } from "@react-navigation/native";
import { screenMap } from "../../navigation/screenMap";

const ProductDetailsController = () => {
    const navigation = useNavigation()

    const onSubscribe = (product) => {
        navigation.navigate(screenMap.SubscribeScreen, {product: product})
    }

    return { onSubscribe }
}

export default ProductDetailsController