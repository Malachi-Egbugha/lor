import  {Request, Response} from 'express';
export const apiauthorize = (req: Request, res: Response, next:any) => {
    let token;
  
    if (req.headers.accesstoken) {
      token = req.headers.accesstoken;
    }
  
    if (!token) {
      return res.status(403).json({ msg: "Unauthorise User", status: false });
    } else if (token !== process.env.ACCESSKEY) {
      return res.status(403).json({ msg: "Wrong Token", status: false });
    }
    next();
  };