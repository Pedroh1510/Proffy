import { LoginRepository } from '../../../repositories/implementations/TypeOrm/LoginRepositoryTypeOrm';
import { RemoveUseCase } from './RegisterUseCase';
import { RemoveController } from './RemoveController';

const loginRepository = new LoginRepository();

const removeUseCase = new RemoveUseCase(loginRepository);

const removeController = new RemoveController(removeUseCase);

export { removeController };
