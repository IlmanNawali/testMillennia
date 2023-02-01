async function login(req, res){
    var username = 'admin'
    var password = '12345'
    if (req.query.username === username && req.query.password === password){
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Success", display_message:"Login Success "}));
    }else{
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Failed", display_message:"Login Failed "}));
    }
}

module.exports = login