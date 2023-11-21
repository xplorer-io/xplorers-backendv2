import { RequestHandler, Request, Response } from "express";
import { accoladeService } from "../../../services/accolade/AccoladeService";
import { IAccolade } from "types/Accolade";

interface IAccoladeControllerResponseBody {
  author?: string;
  message: string;
}

interface IAccoladeControllerResponse {
  status_code: number;
  message: string;
  accolade: IAccolade;
}

export const CreateAccoladeController: RequestHandler = async (
  request: Request,
  response: Response
): Promise<Response<IAccoladeControllerResponse>> => {
  console.log(
    `Getting request body for CreateAccoladeController ${JSON.stringify(
      request.body
    )}`
  );

  const { author, message } = request.body;

  const accoladeResult = await accoladeService.createAccolade({
    author: author || "",
    message: message,
  });

  return response.status(200).json({
    status_code: accoladeResult.status_code,
    message: accoladeResult.message,
    accolade: accoladeResult.accolade,
  });
};
