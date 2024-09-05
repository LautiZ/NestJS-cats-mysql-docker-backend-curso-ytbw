import { applyDecorators, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { Role } from '../../common/enums/role.enum';
import { RolesGuard } from '../guard/roles.guard';
import { AuthGuard } from '../guard/auth.guard';

export function Auth(role: Role) {
  return applyDecorators(Roles(role), UseGuards(AuthGuard, RolesGuard));
}
