import app from '../app/server';
import supertest from 'supertest';
import resize from '../app/imgProcesser/resize';
import fs from 'fs';
import path from 'node:path';
import sharp from "sharp"
const Request1 = supertest(app)


/**********************************/

describe('test the endpoints  and the reszie fucntion responses',()=>{


    it('test the resize endoint response with the resize funcations', async ()=>{
           
        const response = await Request1.get('/resize/?name=palmtunnel&width=700&height=700');
        expect(response.status).toEqual(200);    
       
    });

    it('expect the resize to not thorw anything',  ()=>{
        const name = 'palmtunnel';
        const width = 760;
        const height = 599
        
        expect( ()=>{resize(name,width,height )}).not.toThrow()

    })


})
