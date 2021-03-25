import { ClassRepositoryTypeOrm } from './../../../repositories/implementations/TypeOrm/ClassRepositoryTypeOrm';
import { UpdateClassController } from './UpdateClassController';
import { UpdateClassUseCase } from './UpdateClassUseCase';

const classRepository = new ClassRepositoryTypeOrm();

const updateClassUseCase = new UpdateClassUseCase(classRepository);

const updateClassController = new UpdateClassController(updateClassUseCase);

export { updateClassController };
