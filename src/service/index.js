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

    // AUTHENTICATION SERVICE
    // authenticationLogin(data) {
    //     return client.request(
    //         {
    //             method: "POST",
    //             url: `${BASE_URL}/api/auth/login`,
    //             data
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // authenticationSignUp(data) {
    //     return client.request(
    //         {
    //             method: "POST",
    //             url: `${BASE_URL}/api/users/register`,
    //             data
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // forgotPassword(data) {
    //     return client.request(
    //         {
    //             method: "POST",
    //             url: `${BASE_URL}/api/users/forgotPassword`,
    //             data
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // otpForgotPassword(data) {
    //     return client.request(
    //         {
    //             method: "POST",
    //             url: `${BASE_URL}/api/users/verificationCode`,
    //             data
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // otpRegister(data) {
    //     return client.request(
    //         {
    //             method: "POST",
    //             url: `${BASE_URL}/api/users/register/verificationCode`,
    //             data
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // completeData(data) {
    //     return client.request(
    //         {
    //             method: "POST",
    //             url: `${BASE_URL}/api/users/register/createAccount`,
    //             data
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // resetPassword(data) {
    //     return client.request(
    //         {
    //             method: "POST",
    //             url: `${BASE_URL}/api/users/resetPassword`,
    //             data
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // END AUTHENTICATION SERVICE

    // LANDING PAGE SERVICE
    // getProductType() {
    //     return client.request(
    //         {
    //             method: "GET",
    //             url: `${BASE_URL}/api/productType/getAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getDTPAdvantage() {
    //     return client.request(
    //         {
    //             method: "GET",
    //             url: `${BASE_URL}/api/contentAdvantageDtp/getAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getCustomerStories() {
    //     return client.request(
    //         {
    //             method: "GET",
    //             url: `${BASE_URL}/api/contentCustomerStories/getAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getHeaderAll() {
    //     return client.request(
    //         {
    //             method: "GET",
    //             url: `${BASE_URL}/api/header/readAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getFooterAll() {
    //     return client.request(
    //         {
    //             method: "GET",
    //             url: `${BASE_URL}/api/footer/readAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getCarousel() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/landingPage/carousel`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // END LANDING PAGE SERVICE

    // CONTACT US SERVICE
    // getContactUs() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/contentContactUs/getAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getLocation() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/location/readAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // problemReport(data) {
    //     return client.request(
    //         {
    //             method: "POST",
    //             url: `${BASE_URL}/api/problemReport/addWithEmail`,
    //             data
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // END CONTACT US SERVICE

    // ABOUT SERVICE
    // getDTPAbout() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/showAbout`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // // END ABOUT SERVICE

    // // PRODUCT SERVICE
    // getDataProduct() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/product/readAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getContentProduct() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/contentProduct/getAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getDataIndustries() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/industries/readAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getFilterDataOurProduct(solution, industries, pageNo, pageSize) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/product/filterProduct?solution=${solution}&industries=${industries}&pageNo=${pageNo}&pageSize=${pageSize}`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // // END PRODUCT SERVICE

    // // DETAIL PRODUCT SERVICE
    // getDetailProduct(productId) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/product/show/${productId}`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getHowToUse(productId) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/howToUse/product/${productId}`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getPackage(productId) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/productPackagePrice/getProductPackageByProductId?productId=${productId}`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // // END DETAIL PRODUCT SERVICE

    // // SIMULATION PLAN
    // getSimulationPlan(solution, budget) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/product/simulation/getData?solution=${solution}&budget=${budget}`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // END SIMULATION PLAN

    // PLAN AND PRICING
    // getPlanPricing(solution) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/planAndPricing/getData?solution=${solution}`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // END PLAN AND PRICING

    // DASHBOARD SERVICE
    // getDashboardMenu() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/contentDashboardMenu/getAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getDashboardProduct(filter) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/dashboard/home/searchProduct?filter=${filter}`,
    //             headers: {
    //               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //             },
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getDashboardDescription() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/dashboard/home/getDescription`,
    //             headers: {
    //               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //             },
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // END DASHBOARD SERVICE

    // FAQ SERVICE
    // getFaq() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/faq/showAll`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // searchFaq(params) {
    //     return client.request(
    //         {
    //             method: "post",
    //             url: `${BASE_URL}/api/faq/search?words=${params}`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // END FAQ SERVICE

    // TERMS AND CONDITION SERVICE
    // getListTermsCondition() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/termsAndConditions/showAllTitle`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getContentTermsCondition(id) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/termsAndConditions/read/${id}`
    //         },
    //         {
    //             crossdomain: true
    //         }
    //     )
    // },
    // getSubContentTermsCondition(id) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/termsAndConditions/sub/read/${id}`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // downloadPdf(params) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/downloadFile/?filePathInput=${params}`,
    //             // responseType: 'blob'
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // // END TERMS AND CONDITION SERVICE

    // // PRIVACY POLICY SERVICE
    // getListPrivacyPolicy() {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/privacyPolicy/showAllTitle`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // getContentPrivacyPolicy(id) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/privacyPolicy/read/${id}`
    //         },
    //         {
    //             crossdomain: true
    //         }
    //     )
    // },
    // getSubContentPrivacyPolicy(id) {
    //     return client.request(
    //         {
    //             method: "get",
    //             url: `${BASE_URL}/api/privacyPolicy/sub/read/${id}`
    //         },
    //         { crossdomain: true }
    //     )
    // },
    // END PRIVACY POLICY SERVICE
}

export { SVIServices };