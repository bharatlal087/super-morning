import { configuration } from "../../constants/configuration";
import StorageClient from "../storage/StorageClient";
const isAPILoggerEnable = true

const apiLogger = (url: string, json: any) => {
    if (isAPILoggerEnable) {
        console.log('******** API Completed ***********')
        console.log('URL: POST ' + url)
        console.log('Response: ', json)
        console.log('**********************************')
    }
}

const apiClient = async (method: string, endPoint: string, body?: { [key: string]: any }) => {
    try {
        const { SCGetString } = StorageClient();
        const token = await SCGetString('accessToken');
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'apikey': configuration.apiKey,
            'Authorization': token ? `Bearer ${token}` : ''
        }

        let url = configuration.baseUrl + endPoint
        let response = await fetch(url, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : null
        });
        let json = await response.json();
        apiLogger(url, json)
        return json;
    } catch (error) {
        return {error: ("" + error).replace('TypeError: ', '')}
    }
}

export const postService = async (endPoint: string, body: { [key: string]: any }) => {
    let json = await apiClient('POST', endPoint, body)
    if (json.status == true) {
        return json;
    } else {
        return {error: json.message};
    }
}

export const getService = async (endPoint: string) => {
    let json = await apiClient('GET', endPoint)
    if (json.status == true) {
        return json;
    } else {
        return {error: json.message};
    } 
}