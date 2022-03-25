class UserController {
  static async MercadoPago(req, res) {
    let mercadopago = require("mercadopago");
    mercadopago.configurations.setAccessToken("TEST-1563784923610983-032021-bb03b6e39a4039d108315b0f6ec64935-491832712");
    console.log("body",req.body);
    mercadopago.payment
      .save(req.body)
      .then(function (response) {
          console.log("response ok",response.body);
        const { status, status_detail, id } = response.body;
        res.status(response.status).json({ status, status_detail, id });
      })
      .catch(function (error) {
        console.error(error);
        res.status(error.status).json(error.cause[0]);
      });
  }
}
module.exports = UserController;

/* Cuando el usuario pasa catalogos */
