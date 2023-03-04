import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { GeoComponent } from './geo-component.model';

@ObjectType()
export class Geometry {
  @Field({ nullable: true })
  magnitudeValue?: string;

  @Field({ nullable: true })
  magnitudeUnit?: string;

  @Field({ nullable: true })
  date?: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => [Float], { nullable: 'items' })
  coordinates?: [number];

  @Field((type) => GeoComponent, { nullable: true })
  geoComponent: GeoComponent;
}
