import { Resolver } from '@nestjs/graphql';
import { OAuthService } from './o-auth.service';

@Resolver()
export class OAuthResolver {
  constructor(private readonly oAuthService: OAuthService) {}
}
