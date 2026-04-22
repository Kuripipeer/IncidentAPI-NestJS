import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IncidentType } from "../enums/incidentType.enum";
import type { Point } from "typeorm";

@Entity("incident")
export class Incident{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({
        type: 'geometry',
        spatialFeatureType: 'Point',
        srid: 4326
    })
    location!: Point;

    @Column()
    title!:string;

    @Column()
    description!:string;

    @Column({type:"int"})
    type!:IncidentType

    @CreateDateColumn({name: 'created_at'})
    createdAt!:Date;
}