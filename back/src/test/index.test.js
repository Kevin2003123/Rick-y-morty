const server = require('../server');
const session = require('supertest');
const agent =  session(server);

describe("Test de RUTAS", ()=>{
    it('ONSEARCH Responde con status: 200', async()=>{
        await agent.get('/rickandmorty/onsearch/1').expect(200);
    })

    it(`ONSEARCH Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image`, async()=>{
       const res= await agent.get('/rickandmorty/onsearch/1')
       expect(Object.keys(res.body).sort()).toEqual(['id', 'name','species','gender', 'image'].sort())
    })


    it('ONSEARCH Si hay un error responde con status: 500', async()=>{
        await agent.get('/rickandmorty/onsearch/1000').expect(500);
    })

    it('DETAIL Responde con status: 200', async()=>{
        await agent.get('/rickandmorty/detail/2').expect(200);
    })

    it(`DETAIL Responde un objeto con las propiedades: "image", "name", "species", "gender" , "origin" e "status`, async()=>{
        const res= await agent.get('/rickandmorty/detail/5')
        expect(Object.keys(res.body).sort()).toEqual(['image', 'name','gender','status', 'origin', 'species'].sort())
     })

     it('DETAIL Si hay un error responde con status: 500', async()=>{
        await agent.get('/rickandmorty/detail/1000').expect(500);
    })

    it("POST FAV devuelve error para objeto imcopleto", async()=>{
      await  agent.post('/rickandmorty/fav').send({id: 1, name: 'kevin', species: 'human',gender: 'male'}).expect(500)
        
    })

    it("POST FAV devuelve los valores correctos", async()=>{
        const res = await agent.post('/rickandmorty/fav').send({id: 1, name: 'kevin', species: 'human',gender: 'male',image:'kevin image'})
        expect(Object.values(res.body).sort()).toEqual([1,'kevin','human','male', 'kevin image'].sort())
    })
 
})
