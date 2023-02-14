/* eslint-disable prettier/prettier */
import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { UserDTO } from 'src/users/dtos/UserDTO';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: UserDTO, metadata: ArgumentMetadata) {
    console.log('Inside validateCreateUserPipe');
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());

    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'invalid data type for property age',
        HttpStatus.BAD_REQUEST);
    }
    console.log(`is a number ${parseAgeToInt} returning...`)

    return { ...value, parseAgeToInt };
  }
}
