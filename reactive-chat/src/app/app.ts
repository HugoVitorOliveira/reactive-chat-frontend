import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { particlesConfig } from './shared/particles-config';
import { Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxParticlesModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'reactive-chat';
  id = 'tsparticles';
  options = particlesConfig;

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
