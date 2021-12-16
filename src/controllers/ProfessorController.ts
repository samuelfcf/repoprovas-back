import HelperResponse from '../helpers/HandleErrors';
import ProfessorService from '../services/ProfessorService';
import { RequestHandlerAPI } from '../types/Request';
import { HttpStatusCode } from '../utils/enums';

class ProfessorController {
  public find: RequestHandlerAPI = async (req, res, next) => {
    try {
      const professorService = new ProfessorService();

      const professors = await professorService.find();

      return HelperResponse.success(res, {
        status: HttpStatusCode.SUCCESS,
        message: 'success',
        data: professors
      });
    } catch (err) {
      HelperResponse.failed(res, err);
    }
  };
}

export default new ProfessorController();
