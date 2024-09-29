import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iron man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  changeHeroName(): void {
    this.name = 'spider';

  }

  ChangeHeroAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
