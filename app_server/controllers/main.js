/* GET home page. */
module.exports.index = function(req, res, next) {
    res.render('index', { title: 'Tecnología y Recursos Web/Móvil', profesor: 'Antonio Becerra'});
}