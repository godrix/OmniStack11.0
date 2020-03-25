import crypto from 'crypto';
import knex from '~/database'
class OngController {
  async store(req, res) {
    const id = crypto.randomBytes(4).toString('HEX');
    const {name, email, whatsapp, city, uf} = req.body;

   await knex('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    res.json({id});
  }

  async index(req, res){
    const ongs = await knex('ongs').select('*');

    return res.json(ongs)
  }
}

export default new OngController();
