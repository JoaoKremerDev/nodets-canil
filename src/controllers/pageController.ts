import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => { 
    // res.render('pages/page');
    res.send('home')
}

export const dogs = (req: Request, res: Response) => { 
    //res.render('pages/page');
    res.send('dogs')
}

export const cats = (req: Request, res: Response) => { 
    //res.render('pages/page');
    res.send('cats')
    
}
export const fishes = (req: Request, res: Response) => { 
    //res.render('pages/page');
    res.send('fishes')

}