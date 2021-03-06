/**
 * THIS ALL IS DEPRECATED!
 * TODO REMOVE ALL
 */

import { API_DOMAIN } from "../../constants";
import { Session } from '../auth';
import { Cookie } from "../../help";
import { SESSION_TOKEN_KEY } from "../../constants";

export const apiFetch = (url, options, req, h={}) => {
    let headers = h;

    if (!!req) {
        console.log(["USER AUTH", getAuthorizationHeader(req)]);
        headers = {...headers, ...{"Authorization": getAuthorizationHeader(req)}}
    }

    return pureFetch(apiUrl(url), options, headers);
};

export const apiPost = (url, options) => {
    return purePostFetch(apiUrl(url), options);
};

export const purePostFetch = (url, options) => {
    return fetch(url, {
        ...options
    })
        .then((r) => {
            return r.json().then(data => ({...data, statusCode: r.status}))
        });
};

export const pureFetch = (url, options, headers) => {
    headers = {...{
            'Accept': "application/json",
            "Content-Type": "application/json",
        }, ...headers};

    return fetch(url, {
        headers: headers,
        ...options
    })
        .then((r) => {
            return r.json().then(data => ({...data, statusCode: r.status}))
        });
};

const statusCodeMiddleware = (response) => {
    return {...response, ...{ statusCode: response.status }};
};

export const apiUrl = (url) => {
    return API_DOMAIN + url;
};

const getAuthorizationHeader = (req) => {
    return 'Bearer ' + Cookie.getCookie(SESSION_TOKEN_KEY, req);
};
