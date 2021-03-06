const Customer = require('../models/khachhang.model');
 
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
// controllers/products.js
exports.khachhang_create = function (req, res, next) {
    let body = req.body || {
        name: '',
        address: '',
        phoneNumber: 0,
        orderNumber:0,
        placeOrder:''
    };

    let khachhang = new Customer( {
        name: body.name,
        address: body.address,
        phoneNumber: body.phoneNumber,
        orderNumber: body.orderNumber,
        shopID: body.shopID
    });
    
    khachhang.save(function (err, user) {
        if (err) {
            res.send(err);
            return next(err);
        }
        res.send({data:user});
        // res.send('khachhang created successfully')
    })
};

exports.getAll = function (req, res) {
    Customer.find({}, function(err, users) {
        if(err){
            res.status(404).send("error from server");
        }
        res.send(users)
        res.status(200);
    });
};

exports.findByName = function (req, res) {
    let queryName = req.params.name;
    Customer.find({ name: queryName }, function(err, customer){
        res.status(200).send(customer)
    }, function(){
        res.status(400)
    })
};

function renameFieldOfKhachHang(req, res) {
    Customer.updateMany({}, { $rename: { "placeOrder" : "shopID" } }, { multi: true }, function(err, data) {
        if (!err) { 
            //success 
            console.log('Changed ok')
        }
    })
}

exports.renameFieldOfKhachHang = function (req, res) {
    renameFieldOfKhachHang();
};


