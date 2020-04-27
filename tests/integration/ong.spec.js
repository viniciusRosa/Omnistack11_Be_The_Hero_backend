const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {

  beforeEach(async() => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async() => {
    await connection.destroy();
  })

  it('shoud be able to create a new ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Jest",
        email: "ong@jest.com",
        whatsapp:99933001100,
        city: "Osório",
        uf: "RS"
      })

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  })
})