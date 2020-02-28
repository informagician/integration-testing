const request = require('supertest');
const server = require('../api/server');

describe('cohorts router', function() {
    //sanity check test
    it('should run the tests', function(){
        expect(true).toBe(true);
    })

    describe('Get /', function() {
        // it or test
        it('should return 200 OK', function(){
            // instead of expect we'll use the library
            return request(server).get('/api/cohorts').then(res => {
                expect(res.status).toBe(200);
            })
        })

        it('should return cohorts as the router value', function(){
            return request(server).get('/api/cohorts').then(res => {
                expect(res.body.router).toBe('Cohorts')
            })
        })
        it('should return cohorts as the router value', function(){
            return request(server)
            .get('/api/cohorts')
            .then(res => {
                expect(res.type).toMatch(/json/)
            })
        })
        it('should return cohorts as the router value', function(done){
            request(server).get('/api/cohorts').then(res => {
                expect(res.body.router).toBe('Cohorts')
                done()
            })
        })
        it('should return cohorts as the router value', async function(){
            const res = await request(server).get('/api/cohorts');
            
            expect(res.body.router).toBe('Cohorts')
            
        })
    })
})