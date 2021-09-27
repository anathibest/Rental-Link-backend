import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantModule } from './tenant/tenant/tenant.module';


@Module({
	imports: [
		MongooseModule.forRoot("mongodb://localhost:27017/rentallink", { autoCreate: true, }),
		TenantModule
	],
	
	controllers: [],
	providers: [],
})
export class AppModule {}


