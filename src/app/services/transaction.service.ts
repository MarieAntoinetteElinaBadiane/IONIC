import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

    constructor(private httpClient: HttpClient) {}

  private transactionUrl = 'http://localhost:8000/api/login_check';

  retrait(User) {
    const endpoint = 'http://localhost:8000/api/retrait';
    const formData: FormData = new FormData();
    formData.append('codeenvoi', User.codeenvoi);
    formData.append('0', User.CNIretrai);
    formData.append('statut', User.statut);


    return this.httpClient.post(endpoint, User);
  }

  envoi(User) {
    const endpoint = 'http://localhost:8000/api/envoi';
    const formData: FormData = new FormData();
    formData.append('montantenvoi', User.montantenvoi);
    formData.append('nomenvoi', User.nomenvoi);
    formData.append('prenomenvoi', User.prenomenvoi);
    formData.append('telephoneenvoi', User.telephoneenvoi);
    formData.append('CNIenvoi', User.CNIenvoi);
    formData.append('nomretrai', User.nomretrai);
    formData.append('prenomretrai', User.prenomretrai);
    formData.append('telephoneretrai', User.telephoneretrai);
    return this.httpClient.post(endpoint, formData);
  }
}
