const api = require("../utils/buscaCepApi.js")

const route = "/ws/"

async function buscarCep(cep){
    try{
        const response = await api.get(`${route}${cep}/json`)
        return response.data
    }catch(err){
        console.log(err)
    }

}

module.exports = buscarCep