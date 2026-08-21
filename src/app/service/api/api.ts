import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment';

@Service()
export class Api {
    http = inject(HttpClient);

    sendContactMail(fd: FormData) {
        return this.http.post(`${environment.BASE_URL}/contact`, fd);
    }

    sendCareerMail(fd: FormData) {
        return this.http.post(`${environment.BASE_URL}/career`, fd);
    }

    sendChatMail(fd: FormData) {
        return this.http.post(`${environment.BASE_URL}/chat`, fd);
    }
}
