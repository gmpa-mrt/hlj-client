import {fetchJson} from "./api";

export async function getAllKanji(page, limit) {
    return await fetchJson(`https://hlj-server.herokuapp.com/api/kanji/all`)
}