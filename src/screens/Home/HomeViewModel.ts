import { getService } from "../../data/services/NetworkClient";

const HomeViewModel = () => {

    const dashboardItems = async (city: string, state: string) => {
        let result = await getService('/v1/dashboard/city/' + city + '/state/' + state)
        return result
    }

    return {
        dashboardItems
    }
}

export default HomeViewModel;