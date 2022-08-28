import {NextFunction, Request, Response} from "express";

export const getContacts = (req: Request, res: Response) => {
  res.send('contacts');
}

export const getContactsByPageNumber = (req: Request, res: Response) => {
  res.json('TODO');
};

export const createContact = (req: Request, res: Response) => {
  if (!req.params.firstName || !req.params.lastName || !req.params.email || !req.params.phone) {
    return res.json('failed to create contact');
  }

  // email and phone verification

  // image
}

export const updateContactById = (req: Request, res: Response) => {
  res.json('update the item whose id is: ' + req.params.id);
}

export const deleteContactById = (req: Request, res: Response) => {
  res.json('delete the item whose id is: ' + req.params.id);
}

export const getContactById = (req: Request, res: Response) => {
  res.json('id is: ' + req.params.id);
}

export const getContactByKeyword = (req: Request, res: Response) => {

}
