const { Barang }    = require('../models');
async function deleteBarang(req, res){
    const deleteBarang = await Barang.destroy({where: {id:parseInt(req.params.id)}}).then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"List Success ", data: deleteBarang}));
}

module.exports = deleteBarang