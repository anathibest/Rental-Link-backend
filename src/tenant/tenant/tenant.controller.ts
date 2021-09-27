import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
    //tenantService: any;

    constructor(private __tenant: TenantService) { }

    @Post()
    async addTenant(@Body() tenant: { name: string, phone: number, email: string }) {
        return await this.__tenant.addNewTenant(tenant);
    }

    @Get()
	async getAllTenants(){
		return await this.__tenant.getAllTenants();
	}

    @Get('/:tenantId')
	async getOneTenant(@Param('tenantId') tenantId: string ){
		return await this.__tenant.getOneTenant(tenantId);
	}

}
