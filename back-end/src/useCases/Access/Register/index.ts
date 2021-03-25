import { LoginRepository } from './../../../repositories/implementations/TypeOrm/LoginRepositoryTypeOrm';
import { RegisterController } from './RegisterController';
import { RegisterUseCase } from './RegisterUseCase';

const registerRepository = new LoginRepository();

const registerUseCase = new RegisterUseCase(registerRepository);

const registerController = new RegisterController(registerUseCase);

export { registerController };
