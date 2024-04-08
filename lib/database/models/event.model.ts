
import { Document ,Schema, model, models } from "mongoose";
export interface IEvent extends Document{
    _id: string;
    title: string;
    description?: string;
    location?: string;
    creation?: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree?: boolean;
    url?: string;
    category?:{_id: string, name: string}
    organizer?:  {_id: string, firstName: string, lastNamr: string}
}


const EventSchema = new Schema({
title:{type:String, rquired:true},
description:{type:String},
location:{type:String},
creation:{type:Date, default:Date.now},
imageUrl:{type:String, required:true},
startDateTime:{type:Date,default:Date.now},
endDateTime:{type:Date, deafult:Date.now},
price:{type:String},
isFree:{type:Boolean, default:false},
url:{type:String},
category:{type:Schema.Types.ObjectId, ref:'Category'},
organizer:{type:Schema.Types.ObjectId, ref:'User'},

})

const Event = models.Event || model('Event', EventSchema);
export default Event;

