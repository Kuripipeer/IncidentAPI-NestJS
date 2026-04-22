import { IncidentType } from "../enums/incidentType.enum";

export interface IncidentCDto{
    title : string;
    lat: number;
    lon: number;
    description: string;
    type: IncidentType;
}