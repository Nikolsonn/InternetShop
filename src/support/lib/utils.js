import {getRandomString} from "./strings";

export function withUnique(str){
    return `${str}${getRandomString()}`;
}
