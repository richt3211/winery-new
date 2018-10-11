import { stringify } from 'query-string';
//random comment
const getWineries = (filter: object) => {
    const url = `/wineries?${stringify(filter)}`
    console.log(url)
    return fetch(url) //calling an http request on the home directory of the page. Should be called whenever the home page is loaded
    .then(res => {
        return res.json()
    })
}
const getWineryById = (id: string) => {
    const url = `/wineries?_id=${id}`
    return fetch(url)
        .then( res => res.json())
}
const getWineryByName = (name: string) => {
    const url = `/wineries?wineryname=${name}`
    console.log(url)
    return fetch(url)
        .then( res => res.json())
}
const searchWineries = (search: string) => {
    const url = `/search?wineryname=${search}`
    return fetch(url)
        .then( res => res.json())
}
const addWinery = (winery: any)  =>
    //calling an http request on the home directory to add a winery based on the vue instance data on the form.
    fetch('/wineries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(winery)
    })
    .then(res => res.send())
const updateWinery = (winery: any) => {
    const form = new FormData()
    for (let key in winery) {
        if (winery.hasOwnProperty(key)) {
            if (winery[key]){
                form.append(`${key}`, winery[key])
            }
        }
    }
    return fetch(`/wineries/${winery._id}`, {
        method: 'PUT',
        body: form
    })
    .then(res => res.json())
    .catch(e => console.log(e))
}
const loadFilters = (query: object) => {
    const url = `/filter?${stringify(query)}`
    return fetch(url)
    .then(res => {
        return res.json()
    })
}
        

export default {
    loadFilters,
    getWineries,
    addWinery,
    updateWinery,
    getWineryById,
    getWineryByName,
    searchWineries,
}