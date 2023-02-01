var multiparty = require('multiparty');
const randomstring	= require("randomstring");
const path 			= require('path');
const fs 			= require('fs');

const { Barang }    = require('../models');


async function barangPut(req, res){
    var form = new multiparty.Form();
    form.parse(req, async function(err, fields, files) {
        var ext             = path.extname(files.image[0].originalFilename);
        var objExt          = ext.split(".")
        var filename        = randomstring.generate(6);
        var readerStream    = fs.createReadStream(files.image[0].path);
        var dest_file       = path.join(process.env.IMAGES_DIRECTORY, filename + "." + objExt[objExt.length - 1]);
        var writerStream    = fs.createWriteStream(dest_file);
        readerStream.pipe(writerStream);
        var barangUpdate = await Barang.update({
            namaBarang: fields.namaBarang[0],
            jumlah: fields.jumlah[0],
            image: filename + "." + objExt[objExt.length - 1]},
        {
            where: {
                id: fields.id[0],
            }
        }).then(Barang => {
            return Barang;
        })
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Success", display_message:"Upload Success ", data: barangUpdate}));
    });
}

module.exports = barangPut