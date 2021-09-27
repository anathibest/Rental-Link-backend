import * as mongoose from 'mongoose';
export const TenantSchema = new mongoose.Schema({

    name: { type: String, required: [ true, 'Please provide your name'] },
    email: { type: String, required:[ true, 'Please provide an email address' ] },
    phone: { type: String },

});


export interface Tenant extends mongoose.Document{
    name: string;
    email: string;
    phone: number;
    id: string;
    
}