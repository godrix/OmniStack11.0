import knex from '~/database';

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const ong = await knex('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return res.status(400).json({ error: 'Nenhuma ONG com esse ID' });
    }
    // const ong_id = req.headers.authorization;
    // const incidents = await knex('incidents').where('ong_id', ong_id).select('*');

    return res.json(ong);
  }
}

export default new SessionController();
