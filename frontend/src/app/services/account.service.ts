import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = '/api/accounts';
  constructor(private http: HttpClient) {}

  getAccounts(){
    return this.http.get<Account[]>(this.baseUrl);
  }

  createAccount(data: any){
    return this.http.post<Account>(this.baseUrl, data);
  }
}
