import { IResponse } from "./Response";

export interface IAccolade {
  accoladeId?: string;
  author: string;
  message: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface IAccoladeBody {
  accoladeId?: string;
  author?: string;
  message: string;
}

export interface IAccoladeResponse extends IResponse {
  accolades?: Array<IAccolade>;
}

export interface ICreateAccoladeResponse extends IResponse {
  accolade?: IAccolade;
}

export interface IAccoladeService {
  getAccolades: () => Promise<IAccoladeResponse>;
  createAccolade: (data: IAccoladeBody) => Promise<ICreateAccoladeResponse>;
}
