import {
  IsNotEmpty,
  IsString,
  IsInt,
  Min,
  Max,
  IsArray,
  IsUUID,
} from 'class-validator';

export class MovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear())
  relaseYear: number;

  @IsString()
  imageUrl: string;

  @IsArray()
  @IsUUID(4, { each: true })
  actorIds: string[];
}
