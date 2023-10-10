import { postService } from "../../data/services/NetworkClient";

const EnterMobileViewModel = () => {

    const generateOTP = async (mobile: string) => {
        let result = await postService('/v1/generateotp', {phoneNumber: mobile})
        return result
    }

    return {
        generateOTP
    }
}

export default EnterMobileViewModel;