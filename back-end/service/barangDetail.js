const { Barang }    = require('../models');
async function barangGetDetail(req, res){
    const getBarangDetail = await Barang.findAll({where: {id:parseInt(req.params.id)}}).then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"List Success ", data: getBarangDetail}));
}

module.exports = barangGetDetail