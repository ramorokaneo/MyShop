const paypal = require('paypal-rest-sdk');

const { PAY_MODE, PAY_CLIENT_KEY, PAYPAL_SECRET_KEY } = process.env;

paypal.configure({
    'mode': PAYPAL_MODE,
    'client_id': PAY_CLIENT_KEY,
    'client_secret': PAYPAL_SECRET_KEY,
});

const renderBuyPage = async(req,res)=>{

    try {
        res.render('index');
    } catch (error) {
        console.log(error.message)
    }
}

const payProduct = async(req,res)=>{
    
    try {

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/success",
                "cancel_url": "http://localhost:3000/cancel"
            },
            "transactions":[{
                "items_list": {
                    "items": [{
                        "name": "Comfortable Sofa",
                        "sku": "001",
                        "price": "17112.29",
                        "currency": "ZAR",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "ZAR",
                    "total": "17112.29"
                },
                "description": "Designed morden chair with luxury curves in an organic yet structured design that holds the sitting body and provides a feeling of relaxation while offering excellent back support."
            }]
        };

        paypal.payment.create(create_payment_json, function (eror, payment) {
            if (error) {
                throw error;
            } else {
                for(let i = 0;i < payment.links.legnth;i++){
                    if(payment.links[i].rel === 'approval_url'){
                        res.redirect(payment.links[i].href);
                    }
                }
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}

const successPage = async(req,res)=>{

    try {

        const payerId = req.query.PayerID;
    }
}