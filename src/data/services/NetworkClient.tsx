import { configuration } from "../../constants/configuration";

export const postService = async (endPoint: string, body: { [key: string]: any }) => {
    try {
        let url = configuration.baseUrl + endPoint
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'apikey': configuration.apiKey
            },
            body: JSON.stringify(body)
        });
        let json = await response.json();
        if (json.status == true) {
            return json;
        } else {
            return {error: json.message};
        }        
    } catch (error) {
        return {error: ("" + error).replace('TypeError: ', '')}
    }
}

export const getService = async (endPoint: string) => {
    try {
        let url = configuration.baseUrl + endPoint
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'apikey': configuration.apiKey
            }
        });
        let json = await response.json();
        if (json.status == true) {
            return json;
        } else {
            return {error: json.message};
        }        
    } catch (error) {
        return {error: ("" + error).replace('TypeError: ', '')}
    }
}