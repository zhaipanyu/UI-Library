function setRouter(app){ 
 var router = app; 

app.get('/getInfo', function (req, res) {
    var len = req.query.length;
    var idx = req.query.pageIndex;
    var data = []
    for (var i=0; i < len; i++) {
        data.push('数据'+(idx*3+i+1))//每次加载3条,为数据4,5,6
    }
    res.send({
        status :0,//成功码     
        data:data       
    });
});}
 module.exports.setRouter = setRouter