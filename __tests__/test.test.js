import request from 'supertest';
import app from '#server';

test('super simple test', async () => {
    const resp = await request(app).get('/');
    expect(resp.text).toBe('hello');
});
