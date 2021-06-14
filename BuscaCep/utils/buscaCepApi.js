const axios = require("axios")

const api = axios.create({
    method:"get",
    baseURL:`https://viacep.com.br`,
    timeout: 5000
})

module.exports = api