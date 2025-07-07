import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    accountForm!: FormGroup;
    accounts: Account[] = [];
    
    
    constructor(private accountService: AccountService, private fb: FormBuilder){}
    

    showAccount() {
    this.accountService.getAccounts().subscribe({
      next: data => {
        this.accounts = data;
        console.log('Accounts received:', this.accounts);
      },
      error: err => {
        console.error('Failed to fetch accounts:', err);
      }
    });
  }

    createAccount(){
      if (this.accountForm.valid){
        const account: Account = this.accountForm.value;
        console.log('New Account: ', account);
        this.accountService.createAccount(account).subscribe(
          response => console.log('Account created Successfully:', response),
          error => console.error('Error creating account: ', error)
        );
      }
    }

    ngOnInit(): void {
        // this.showAccount();
        this.accountForm = this.fb.group({
        accountHolderName: ['', Validators.required],
        balance: 0, 
        userId: 1,
        transactions: [[]],
      });
    }

}
