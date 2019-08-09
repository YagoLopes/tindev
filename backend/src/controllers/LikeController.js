const Dev = require("../models/Dev");
module.exports = {
  async store(req, res) {
    const { user } = req.headers; /*ID do dev que envia o like */
    const { devId } = req.params; /*ID do dev que recebe o like */

    const loggedDev = await Dev.findById(
      user
    ); /*Retorna os dados do usuario logado*/
    const targetDev = await Dev.findById(
      devId
    ); /*Retorna os dados do usuario alvo*/

    if (!targetDev) {
      return res.status(400).json({
        error: "Dev not exists"
      }); /*caso o usuario não exista retorne o status de error*/
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      /*caso exista like dos dois users*/
      console.log("DEU MATCH");
    }

    loggedDev.likes.push(targetDev._id); /* add like */
    await loggedDev.save(); /*slavando user com novo like*/

    return res.json(loggedDev);
  }
};
