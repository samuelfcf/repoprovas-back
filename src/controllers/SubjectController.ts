import HelperResponse from '../helpers/HandleErrors';
import SubjectService from '../services/SubjectService';
import { RequestHandlerAPI } from '../types/Request';
import { ISubjectEntity } from '../types/Subject';
import { HttpStatusCode } from '../utils/enums';

class SubjectController {
  public find: RequestHandlerAPI = async (req, res, next) => {
    try {
      const subjectService = new SubjectService();
      const subjects: ISubjectEntity[] = await subjectService.find();

      return HelperResponse.success(res, {
        status: HttpStatusCode.SUCCESS,
        data: subjects
      });
    } catch (err) {
      return HelperResponse.failed(res, err);
    }
  };
}

export default new SubjectController();
