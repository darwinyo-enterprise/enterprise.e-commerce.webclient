import { IManufacturerListModel } from '../models/manufacturer-list.model';
import { IManufacturerModel } from '../models/manufacturer.model';

export const manufacturerMocks = <IManufacturerListModel>{
    manufacturers: [
        <IManufacturerModel>{
            manufacturerName: 'Samsung'
        },
        <IManufacturerModel>{
            manufacturerName: 'Sony'
        },
        <IManufacturerModel>{
            manufacturerName: 'Nvidia'
        },
        <IManufacturerModel>{
            manufacturerName: 'AMD'
        }
    ]
};
