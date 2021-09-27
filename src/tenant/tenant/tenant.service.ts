import { Injectable, Logger } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from "mongoose";


import { Tenant } from './tenant.model';


@Injectable()
export class TenantService {
    
    logger: Logger;
    constructor(){
		this.logger = new Logger(TenantService.name)
	}

    insertTenant(tenant: any) {
        return tenant
    }

}
