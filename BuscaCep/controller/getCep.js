const buscarCep = require("../service/getCep.js")

const cepController = {

    get:async (req, res)=>{
        const {cep} = req.params

        const cepGet = await buscarCep(cep)
        
        res.status(200).json(cepGet)
    }
}

module.exports = cepController