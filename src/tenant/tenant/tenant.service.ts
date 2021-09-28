import { Body, Injectable, Logger, Param, Patch } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from "mongoose";

import { Tenant } from './tenant.model';


@Injectable()
export class TenantService {
    
    logger: Logger;
    constructor(@InjectModel('Tenant') private readonly __tenantModel: Model<Tenant>){
		this.logger = new Logger(TenantService.name)
	}

    async addNewTenant(tenant: any) {

        const new_tenant = new this.__tenantModel(tenant);
        new_tenant.save();
        return "saved successfully"
    }

    async getAllTenants(){
		return (await this.__tenantModel.find().sort({ name: 1 }).exec()).map((book: any) => ({ id: book.id, phone: book.phone, email: book.email, name: book.name }));
	}

    async getOneTenant(tenantId: any){
		const tenant = await this.__tenantModel.findOne({_id:tenantId});
		return tenant;
	}

    async deleteOneTenant(tenantId: string){
		await this.getOneTenant(tenantId);
		const remove_tenant = await this.__tenantModel.findOneAndDelete({ _id: tenantId }).exec();
		return { message: `successfully deleted ${remove_tenant.name}'` };

    }

    @Patch('/:tenantId')
	async updateOneTenant(@Param('tenantId') tenantId: string, @Body() tenant : { phone: number, email: string, name: string }){
        return await this.__tenantModel.findByIdAndUpdate(tenantId, tenant);
    }


}
