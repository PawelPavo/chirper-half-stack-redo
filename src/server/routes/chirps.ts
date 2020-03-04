import { Router } from 'express';
import chirpstore from '../utils/chirpstore';

const router = Router()

router.get('/:id?', (req, res)=> {
    const id = req.params.id
    if (id) {
        const chirp = chirpstore.GetChirp(id);
        res.json({id: id, ...chirp });
    } else {
        let data = chirpstore.GetChirps();
        const chirps = Object.keys(data).map(key=>{
            return {
                id: key,
                user: data[key].user,
                text: data[key].text
            }
        });
        chirps.pop();
        res.json(chirps)
    }
})

router.post('/', (req, res)=>{
    chirpstore.CreateChirp(req.body);
    res.json('Chirp Added')
});

router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    chirpstore.DeleteChirp(id);
    res.json('Chirp Deleted')
})

router.put('/:id', (req, res)=>{
    const id = req.params.id;
    chirpstore.UpdateChirp(id, req.body);
    res.json('chirp edited')
})

export default router;