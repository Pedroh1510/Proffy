import { CreateClassController } from './CreateClassController';
import { ClassRepositoryTypeOrm } from './../../../repositories/implementations/TypeOrm/ClassRepositoryTypeOrm';
import { CreateClassUseCase } from './CreateClassUseCase';

const classRepository = new ClassRepositoryTypeOrm();

const createClassUseCase = new CreateClassUseCase(classRepository);

const createClassController = new CreateClassController(createClassUseCase);

export { createClassController };
