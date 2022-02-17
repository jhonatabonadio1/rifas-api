import {Request, Response} from 'express'

class InitialController{
  async handle(req: Request, res: Response){
    return res.send("Olá mundo!")
  }
}

export { InitialController }
