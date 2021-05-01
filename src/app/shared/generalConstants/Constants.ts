export class Constants {

  get TITLE(): string {
    return this._TITLE;
  }

  get TOTAL_CONFIRMED(): string {
    return this._TOTAL_CONFIRMED;
  }

  get TOTAL_DEATHS(): string {
    return this._TOTAL_DEATHS;
  }

  get TOTAL_RECOVERED(): string {
    return this._TOTAL_RECOVERED;
  }

  get ACTIVE_CASES(): string {
    return this._ACTIVE_CASES;
  }

  get NEW_CONFIRMED(): string {
    return this._NEW_CONFIRMED;
  }

  get NEW_DEATHS(): string {
    return this._NEW_DEATHS;
  }

  get NEW_RECOVERED(): string {
    return this._NEW_RECOVERED;
  }

  private _TITLE = 'COVID-19 info';

  private _TOTAL_CONFIRMED = 'Total confirmed';

  private _TOTAL_DEATHS = 'Total deaths';

  private _TOTAL_RECOVERED = 'Total recovered';

  private _ACTIVE_CASES = 'Active cases';

  private _NEW_CONFIRMED = 'New confirmed';

  private _NEW_DEATHS = 'New deaths';

  private _NEW_RECOVERED = 'New recovered';
}
