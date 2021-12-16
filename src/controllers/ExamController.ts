import joi from 'joi';
import HelperResponse from '../helpers/HandleErrors';
import ExamService from '../services/ExamService';
import { IExam } from '../types/Exam';
import { RequestHandlerAPI } from '../types/Request';
import { HttpStatusCode } from '../utils/enums';

const createExamValidator = joi.object({
  name: joi.string().min(3).required(),
  category: joi.string().max(2).required(),
  url: joi.string().required(),
  professorId: joi.number().integer().required(),
  subjectId: joi.number().integer().required()
});

class ExamController {
  public create: RequestHandlerAPI = async (req, res, next) => {
    try {
      const { name, category, url, professorId, subjectId }: IExam = req.body;
      const { error } = createExamValidator.validate({
        name,
        category,
        url,
        professorId,
        subjectId
      });
      if (error) return next(error.details);

      const examService = new ExamService();
      const exam = await examService.create({
        name,
        category,
        url,
        professorId,
        subjectId
      });

      return HelperResponse.success(res, {
        status: HttpStatusCode.CREATED,
        message: 'Exam created successfully',
        data: exam
      });
    } catch (err) {
      return HelperResponse.failed(res, err);
    }
  };

  public find: RequestHandlerAPI = async (req, res, next) => {
    try {
      const examService = new ExamService();

      const exams = await examService.find();

      return HelperResponse.success(res, {
        status: HttpStatusCode.SUCCESS,
        message: 'success',
        data: exams
      });
    } catch (err) {
      HelperResponse.failed(res, err);
    }
  };
}

export default new ExamController();
