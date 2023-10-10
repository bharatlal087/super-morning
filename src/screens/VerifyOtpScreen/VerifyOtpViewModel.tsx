import { postService } from "../../data/services/NetworkClient";
import StorageClient from "../../data/storage/StorageClient";

const VerifyOtpViewModel = () => {
    const { SCSaveString, SCSaveJson } = StorageClient();

    const verifyOTP = async (token: string, code: string) => {
        let result = await postService('/v1/loginbyotp', {token: token, code: code})
        if (result.data && result.data.token && result.data.profile) {
            await SCSaveString('accessToken', result.data.token)
            await SCSaveJson('userProfile', result.data.profile)
        }
        return result
    }

    return {
        verifyOTP
    }
}

export default VerifyOtpViewModel;