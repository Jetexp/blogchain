import fetch from 'isomorphic-unfetch';
import { API_DOMAIN } from "../../constants";
import { Session } from '../auth';
import { Cookie } from "../../help";
import { SESSION_TOKEN_KEY } from "../../constants";

export const apiFetch = (url, options, req) => {
    let headers = {};

    if (!!req) {
        console.log(["USER AUTH", getAuthorizationHeader(req)]);
        headers = {...headers, ...{"Authorization": getAuthorizationHeader(req)}}
    }

    return pureFetch(apiUrl(url), options, headers);
};

export const pureFetch = (url, options, headers) => {
    headers = {...headers, ...{
            'Accept': "application/json",
            "Content-Type": "application/json",
        }};

    return fetch(url, {
        headers: headers,
        ...options
    })
        .then(handleResponse)
        .then(response => response.json());
};

const handleResponse = (response) => {
    return response;
};

export const apiUrl = (url) => {
    return API_DOMAIN + url;
};

const getAuthorizationHeader = (req) => {
    return 'Bearer ' + Cookie.getCookie(SESSION_TOKEN_KEY, req);
};