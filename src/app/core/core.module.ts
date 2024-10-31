import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  providers: [AuthService, UserService]
})
export class CoreModule
{
  constructor(@Optional() @SkipSelf() parentModule: CoreModule)
  {
    if (parentModule)
    {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
