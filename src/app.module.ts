import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EstateTransactionModule } from './modules/estate-transaction/estate-transaction.module';
import configuration from './config/default';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    EstateTransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
