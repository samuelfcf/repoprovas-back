import HelperResponse from '../helpers/HandleErrors';
import ProfessorService from '../services/ProfessorService';
import { IProfessorEntity } from '../types/Professor';
import { RequestHandlerAPI } from '../types/Request';
import { HttpStatusCode } from '../utils/enums';

class ProfessorController {
  public find: RequestHandlerAPI = async (req, res, next) => {
    try {
      const professorService = new ProfessorService();

      const professors: IProfessorEntity[] = await professorService.find();

      return HelperResponse.success(res, {
        status: HttpStatusCode.SUCCESS,
        data: professors
      });
    } catch (err) {
      HelperResponse.failed(res, err);
    }
  };
}

export default new ProfessorController();
