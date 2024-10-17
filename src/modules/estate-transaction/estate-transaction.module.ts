import { Module } from '@nestjs/common';
import { EstateTransactionController } from './controllers/estate-transaction.controller';
import { EstateTransactionUseCase } from './services/estate-transaction.usecase';
import { ResasApiService } from './infrastructure/resas-api.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule], // For Loading the environment variables (API keys, etc.). 環境変数(APIキーなど)を読み込むための設定です
  controllers: [EstateTransactionController], // Registering the controller. コントローラーを登録します
  providers: [EstateTransactionUseCase, ResasApiService], // Registering the service. サービスを登録します
})
export class EstateTransactionModule {}
