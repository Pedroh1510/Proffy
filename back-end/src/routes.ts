import { Router } from 'express';
import { createClassController } from './useCases/Class/CreateClass';
import { listClassController } from './useCases/Class/ListClass';
import { createConnectionController } from './useCases/Connection/CreateConnection';
import { countConnectionsController } from './useCases/Connection/CountConnections';

const routes = Router();

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
