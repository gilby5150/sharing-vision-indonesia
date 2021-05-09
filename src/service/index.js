import axios from "axios";
import { BASE_URL } from "./../config";

const client = axios.create([BASE_URL]);

const SVIServices = {
    //GET List-All-Users

    getProductType() {
        return client.request(
            {
                method: "GET",
                url: `${BASE_URL}/user`
            },
            { crossdomain: true }
        )
    },
    //END List-All-Users

    //POST Insert-Users
    authenticationLogin(data) {
        return client.request(
            {
                method: "POST",
                url: `${BASE_URL}/user`,
                data
            },
            { crossdomain: true }
        )
    }
    //END POST Insert-Users
}

export { SVIServices };