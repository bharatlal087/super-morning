import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageClient = () => {
    const SCSaveString = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch(e) {
            console.log('Failed to save value')
        }
    }

    const SCSaveJson = async (key: string, value: {[key: string]: any}) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue)
        } catch(e) {
            console.log('Failed to save value')
        }
    }

    const SCGetString = async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch(e) {
            console.log('Failed to get value')
            return null;
        }
    }

    const SCGetJson = async (key: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log('Failed to get value')
            return null;
        }
    }

    return {
        SCSaveString,
        SCGetString,
        SCSaveJson,
        SCGetJson
    }
}

export default StorageClient;
