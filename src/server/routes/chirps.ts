import * as express from 'express';
import { GetChirp, GetChirps, UpdateChirp, CreateChirp, DeleteChirp } from '../../../chirpstore';

let router = express.Router()

router.get('/:id?', (req: express.Request, res: express.Response) => {
    let id: string = req.params.id;
    if (id) {
        res.json(GetChirp(id));
    } else {
        const data = GetChirps();
        const chirps: chirp[] = Object.keys(data).map((key) => {
            return {
                id: key,
                name: data[key].name,
                text: data[key].text,
            };
        });
        chirps.pop();
        res.status(200).json(chirps);
    }
});

router.post('/', (req: express.Request, res: express.Response) => {
    CreateChirp(req.body);
    res.sendStatus(200);
});

router.put("/:id", (req: express.Request, res: express.Response) => {
    let id: string = req.params.id;
    let chirp: string = req.body;
    UpdateChirp(id, chirp);
    res.sendStatus(200);
});

router.delete("/:id", (req: express.Request, res: express.Response) => {
    let id: string = req.params.id;
    DeleteChirp(id);
    res.sendStatus(200);
});

interface chirp {
    id: string,
    name: string,
    text: string
}

export default router