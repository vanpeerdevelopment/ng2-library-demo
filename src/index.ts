import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { LibraryComponent } from './library-component.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    LibraryComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    LibraryComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class Ng2LibraryDemoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2LibraryDemoModule,
      providers: [SampleService]
    };
  }
}
