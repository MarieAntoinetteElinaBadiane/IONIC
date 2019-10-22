import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  envoiData = {};
  retraitData = {};
  constructor(private ransaction: TransactionService,
              private router: Router) { }

  ngOnInit() {
  }

  envoi() {
    this.ransaction.envoi(this.envoiData)
    .subscribe(
      res => {
        console.log(this.envoiData);
        console.log(res);
      },
      err => {
       console.log(err);
       }
        );
      }
      retrait() {
        this.ransaction.retrait(this.retraitData)
        .subscribe(
          res => {
            console.log(this.retraitData);
            console.log(res);
          },
          err => {
           console.log(err);
           }
            );
          }
          showHideEnvoi() {
            const e = document.getElementById('infoEnvoi');
            e.style.display = 'block';

            const r = document.getElementById('infoRetrait');
            r.style.display = 'none';

        }
        showHideRetrait() {
          const e = document.getElementById('infoEnvoi');
          e.style.display = 'none';

          const r = document.getElementById('infoRetrait');
          r.style.display = 'block';

      }
}
