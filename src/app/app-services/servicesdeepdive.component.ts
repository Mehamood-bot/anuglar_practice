import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-servicesdeepdive',
  templateUrl: './servicesdeepdive.component.html',
  styleUrls: ['./servicesdeepdive.component.css']
})
export class ServicesdeepdiveComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

}
