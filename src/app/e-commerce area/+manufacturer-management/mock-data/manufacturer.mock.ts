import { IManufacturerModel } from '../models/manufacturer.model';

export const manufacturerMocks: IManufacturerModel[] =
    [
        <IManufacturerModel>{
            manufacturerName: 'Samsung',
            addedDateTime: '2/8/2018',
            addedBy: 'Darwin',
            lastUpdated: null,
            updatedBy: null,
            id: '12'
        },
        <IManufacturerModel>{
            manufacturerName: 'Sony',
            addedDateTime: '2/7/2018',
            addedBy: 'Darwin',
            lastUpdated: '2/7/2018',
            updatedBy: 'Darwin',
            id: '12'
        },
        <IManufacturerModel>{
            manufacturerName: 'Nvidia',
            addedDateTime: '2/8/2018',
            addedBy: 'Darwin',
            lastUpdated: null,
            updatedBy: null,
            id: '12'
        },
        <IManufacturerModel>{
            manufacturerName: 'AMD',
            addedDateTime: '2/8/2018',
            addedBy: 'Darwin',
            lastUpdated: null,
            updatedBy: null,
            id: '12'
        }
    ];
