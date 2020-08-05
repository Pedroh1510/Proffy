import { ListClassController } from './ListClassController';
import { ListClassUseCase } from './ListClassUseCase';
import { ClassRepositoryTypeOrm } from './../../../repositories/implementations/TypeOrm/ClassRepositoryTypeOrm';

const classRepository = new ClassRepositoryTypeOrm();

const listClassUseCase = new ListClassUseCase(classRepository);

const listClassController = new ListClassController(listClassUseCase);

export { listClassController };
