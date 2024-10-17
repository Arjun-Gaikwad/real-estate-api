import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { EstateTransactionUseCase } from '../services/estate-transaction.usecase';

@Controller('api/v1/townPlanning/estateTransaction') // Route: /estate-transaction ルート: /estate-transaction
export class EstateTransactionController {
  constructor(private estateTransactionUseCase: EstateTransactionUseCase) {}

  // This function handles the GET request for estate transaction data.
  // この関数は、不動産取引データのGETリクエストを処理します。
  @Get('bar')
  async getEstateTransaction(
    @Query('year') year: number,
    @Query('prefCode') prefCode: number,
    @Query('cityCode') cityCode: string,
    @Query('displayType') displayType: number,
  ) {
    if (year < 2009 || year > 2021) {
      throw new HttpException(
        'Year must be between 2009 and 2021. 年は 2009 年から 2021 年の間である必要があります。',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (prefCode < 1 || prefCode > 47) {
      throw new HttpException(
        'Invalid prefCode. Must be between 1 and 47. 無効な prefCode。 1 ~ 47 の間で指定する必要があります。',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (displayType < 1 || displayType > 5) {
      throw new HttpException(
        'Invalid displayType. Must be between 1 and 5. 無効なdisplayTypeタイプです。 1 ~ 5 の間である必要があります。',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Calls the service function to get estate transaction data.
    // サービスの関数を呼び出して、不動産取引データを取得します。
    return this.estateTransactionUseCase.fetchEstateTransaction(
      year,
      prefCode,
      cityCode,
      displayType,
    );
  }
}
