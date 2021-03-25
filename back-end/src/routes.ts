import { Router } from 'express';

import { loginController } from './useCases/Access/Login';
import { registerController } from './useCases/Access/Register';
import { removeController } from './useCases/Access/Remove';
import { createClassController } from './useCases/Class/CreateClass';
import { listClassController } from './useCases/Class/ListClass';
import { updateClassController } from './useCases/Class/UpdateClass';
import { countConnectionsController } from './useCases/Connection/CountConnections';
import { createConnectionController } from './useCases/Connection/CreateConnection';

const routes = Router();

routes.post('/login', (req, res) => {
	return loginController.handle(req, res);
});
routes.post('/register', (req, res) => {
	return registerController.handle(req, res);
});

routes.delete('/delete', (req, res) => {
	return removeController.handle(req, res);
});

routes.put('/classes', (req, res) => {
	return updateClassController.handle(req, res);
});

routes.post('/classes', (req, res) => {
	return createClassController.handle(req, res);
});

routes.get('/classes', (req, res) => {
	return listClassController.handle(req, res);
});
routes.post('/connections', (req, res) => {
	return createConnectionController.handle(req, res);
});
routes.get('/connections', (req, res) => {
	return countConnectionsController.handle(req, res);
});

export { routes };
