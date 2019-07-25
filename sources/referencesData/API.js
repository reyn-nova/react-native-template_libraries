import {
    Fetching,
    AppendURL,
    CreatePOST,
} from '../helpers/Networking'

export const usedBaseUrlIndex = 0

export const baseUrls = [
    "https://example.com",
]

export const API = {
    GETExample: () => {
        return Fetching({
            url: AppendURL("/getexample"),
        })
    },
    POSTExample: (parameters = {first, second}) => {
        return Fetching({
            url: "https://example.co.id/postexample",
            bodyJson: CreatePOST(parameters)
        })
    },
}