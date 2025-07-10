import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { particlesOptions } from './shared/particles/particles-options';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxParticlesModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  readonly particlesOptions = particlesOptions;

  private particlesService = inject(NgParticlesService);

  ngOnInit(): void {
    this.initParticles();
  }

  private initParticles(): void {
    this.particlesService.init(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }
}
