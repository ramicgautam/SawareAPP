import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({ 
    templateUrl: 'layout.component.html' ,
    styles: ['.clsimg { height: 100vh }','.clsimg img { width: 100%; height: 100% }']
 })
export class LayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }
}