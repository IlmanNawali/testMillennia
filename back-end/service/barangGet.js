const { Barang }    = require('../models');
async function barangGet(req, res){
    const getBarang = await Barang.findAll().then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"List Success ", data: getBarang}));
}

module.exports = barangGet