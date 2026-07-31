import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-telecom',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './telecom.html',
  styleUrl: './telecom.css',
})
export class Telecom {}
