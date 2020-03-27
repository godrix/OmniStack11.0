const request = require('supertest');

const app = require('../../src/app');
const knex = require('../../src/database');

describe('ONG', () => {
  beforeEach(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
  });

  afterAll(async () => {
    await knex.destroy();
  });
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'ONG Bem Amor',
        email: 'bemamor@gmail.com',
        whatsapp: '47988383838',
        city: 'Penha',
        uf: 'SC',
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
