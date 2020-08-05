import { sqliteTypeOrmConnection } from './repositories/implementations/TypeOrm/config/connectionOptions';
import { app } from './app';
import { typeOrmHelper } from './repositories/implementations/TypeOrm/helper/typeOrmHelper';

typeOrmHelper.connect(sqliteTypeOrmConnection).then(async () => {
	app.listen(3333, () => console.log('Server is running'));
});
