import { Constants } from 'expo'
import { API_PROD, API_DEV, API_LOCAL } from 'react-native-dotenv'

export class Api {
  private static _instance: Api

  private _ApiUrl: String

  public anyMetod(_value: any): any {
    return _value
  }

  public static getInstance(): Api {
    if (Api._instance == null) {
      Api._instance = new Api()
    }
    return this._instance
  }

  constructor() {
    if (Api._instance) {
      throw new Error(
        'Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.',
      )
    }

    console.log(Constants.manifest.releaseChannel)
    this._ApiUrl = this.getApiUrl(Constants.manifest.releaseChannel)
  }

  private getApiUrl(releaseChannel) {
    if (
      releaseChannel === null ||
      releaseChannel === undefined ||
      releaseChannel === ''
    )
      return API_DEV
    if (releaseChannel.indexOf('dev') !== -1) return API_LOCAL
    if (releaseChannel.indexOf('staging') !== -1) return API_DEV
    if (releaseChannel.indexOf('prod') !== -1) return API_PROD
  }
}
