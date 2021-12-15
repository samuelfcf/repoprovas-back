import Helper from '../helpers/HandleErrors';
import SubjectService from '../services/SubjectService';
import { RequestHandlerAPI } from '../types/Request';
import { HttpStatusCode } from '../utils/enums';

class SubjectController {
  public find: RequestHandlerAPI = async (req, res, next) => {
    try {
      const subjectService = new SubjectService();
      const subjects = await subjectService.find();

      return Helper.success(res, {
        status: HttpStatusCode.SUCCESS,
        message: 'success',
        data: subjects
      });
    } catch (err) {
      return Helper.failed(res, err);
    }
  };
}

export default new SubjectController();
