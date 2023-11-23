import {
  IAccolade,
  IAccoladeBody,
  IAccoladeResponse,
  IAccoladeService,
  ICreateAccoladeResponse,
} from "types/Accolade";
import { accoladeModel } from "./Accolade.Model";
import { randomUUID } from "crypto";

class AccoladeService implements IAccoladeService {
  async getAccolades(): Promise<IAccoladeResponse> {
    try {
      console.log("Looking for a existing projects.");

      const accolades = await accoladeModel.find();

      if (!accolades || !accolades.length) {
        console.log(`No projects found.`);
        return {
          status_code: 404,
          message: "No any projects found",
          accolades: accolades,
        };
      }

      console.log("Successfully fetched projects.");

      return {
        status_code: 200,
        message: "Successfully fetched projects",
        accolades: accolades,
      };
    } catch (err) {
      const error = err as Error;
      console.log(`Internal server error ${error}`);
      return {
        status_code: 500,
        message: `Internal server error ${error}`,
      };
    }
  }

  async createAccolade(data: IAccoladeBody): Promise<ICreateAccoladeResponse> {
    try {
      const existingAccolade = await accoladeModel.findOne({
        accoladeId: data.accoladeId,
      });

      console.log("Checking if accolade already exists");

      if (existingAccolade) {
        console.log("Accolade already exists. Nothing to do here :)");
        return {
          status_code: 400,
          message: "Success",
        };
      }

      console.log("Creating accolade from AccoladeService");

      const accoladeData: IAccolade = {
        accoladeId: randomUUID(),
        author: data.author || "",
        message: data.message,
      };

      console.log("Creating accolade model");

      const accolade = new accoladeModel(accoladeData);

      console.log(`Saving user ${JSON.stringify(accoladeData)}`);

      const savedAccolade = await accolade.save();

      if (!savedAccolade) {
        console.log(`Unable to save accolade ${JSON.stringify(accoladeData)}}`);
        return {
          status_code: 500,
          message: "Unable to save accolade",
        };
      }

      console.log("Successfully created accolade");

      return {
        status_code: 200,
        message: "Successfully created accolade",
        accolade: accolade,
      };
    } catch (error) {
      return {
        status_code: 200,
        message: "success",
      };
    }
  }
}

export const accoladeService = new AccoladeService();
