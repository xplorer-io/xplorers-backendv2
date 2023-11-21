import { RequestHandler, Response, Request } from "express";
import { IProject } from "types/Project";
import { accoladeService } from "../../../services/accolade/AccoladeService";

interface IGetAccoladeController {
  status_code: number;
  message: string;
  accolades: Array<IProject>;
}

export const GetAccoladeController: RequestHandler = async (
  request: Request,
  response: Response
): Promise<Response<IGetAccoladeController>> => {
  const accoladeResult = await accoladeService.getAccolades();

  return response.status(accoladeResult.status_code).json({
    status_code: accoladeResult.status_code,
    message: accoladeResult.message,
    acaccoladesc: accoladeResult.accolades,
  });
};
