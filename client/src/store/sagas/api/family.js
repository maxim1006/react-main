import customAxios from "../../../common/api/axios";

export async function getFamilyApi() {
    try {
        const { data } = await customAxios.get("family");

        return data;
    } catch (error) {
        console.log("getUserApi saga api ", error);
    }

    return null;
}
