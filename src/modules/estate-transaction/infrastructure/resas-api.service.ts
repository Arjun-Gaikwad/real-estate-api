import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ResasApiService {
    private readonly apiKey: string;
    private readonly baseUrl: string;

    constructor(private configService: ConfigService) {
        this.apiKey = this.configService.get('resasApiKey');
        this.baseUrl = this.configService.get('resasBaseUrl');
    }

    // Function to get estate transaction data from the RESAS API
    // RESAS APIから不動産取引データを取得する関数です
    async getEstateTransactionData(
        year: number,
        prefCode: number,
        cityCode: string,
        displayType: number,
    ): Promise<any> {
        try {
            // Make the GET request to the RESAS API
            // RESAS APIにGETリクエストを送ります
            const response = await axios.get(this.baseUrl, {
                headers: { 'X-API-KEY': this.apiKey },
                params: { year, prefCode, cityCode, displayType },
            });
            return response.data; // Return the response data if successful. 成功した場合はレスポンスデータを返します.
        } catch (error) {
            throw new HttpException(
                'Failed to fetch data from RESAS API',
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}
