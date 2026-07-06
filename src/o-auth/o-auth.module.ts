import { Module } from '@nestjs/common';
import { OAuthService } from './o-auth.service';
import { OAuthResolver } from './o-auth.resolver';

@Module({
  providers: [OAuthResolver, OAuthService],
})
export class OAuthModule {}
