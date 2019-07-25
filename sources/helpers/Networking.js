import {
    baseUrls,
    usedBaseUrlIndex,
} from "../referencesData/API";

export function Fetching({url, bodyJson}) {
    return (
        bodyJson == undefined ?
            fetch(url)
            :
            fetch(url, bodyJson)
    )
    .then(response => response.text())
}

export function AppendURL(additionalUrl) {
    return baseUrls[usedBaseUrlIndex] + additionalUrl;
}

export function CreatePOST(parameters) {
    return {
        method : "POST",
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(parameters),
    }
}