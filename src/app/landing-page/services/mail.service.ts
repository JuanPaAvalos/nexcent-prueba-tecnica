import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  async subscribeNewsletter(email: string): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        console.log(`Saving email: ${email}`);
        resolve("You've successfully registered");
      }, 1500);
    }).catch(() => {
      return "Failed to subscribe";
    });
  }
}
