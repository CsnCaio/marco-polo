import { ConfigifyModule } from '@itgorillaz/configify';
import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';

@Module({
  imports: [ConfigifyModule.forRootAsync(), AuthModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
