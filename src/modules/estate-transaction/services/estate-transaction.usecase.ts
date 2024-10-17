import { Injectable } from '@nestjs/common';
import { ResasApiService } from '../infrastructure/resas-api.service';

@Injectable()
export class EstateTransactionUseCase {
    constructor(private resasApiService: ResasApiService) { }

    /**
     * Fetches the real estate transaction data.
     * This method serves as the use case that calls the RESAS API service to get the data.
     * 
     * @param year The year of the transaction data. (e.g., 2015)
     * @param prefCode The prefecture code where the transaction took place.
     * @param cityCode The city code where the transaction took place. ('-' means all cities)
     * @param displayType The type of land or property to display (e.g., residential land, commercial land, etc.)
     * @returns The real estate transaction data from the RESAS API.
     */
    // 不動産取引データを取得します。
    // このメソッドはユースケースで、RESAS APIサービスを呼び出してデータを取得します。
    async fetchEstateTransaction(
        year: number,
        prefCode: number,
        cityCode: string,
        displayType: number,
    ): Promise<any> {
        // This returns the data fetched from the RESAS API by calling the ResasApiService.
        // RESAS APIサービスを呼び出して取得したデータを返します。
        return this.resasApiService.getEstateTransactionData(
            year,
            prefCode,
            cityCode,
            displayType,
        );
    }
}
