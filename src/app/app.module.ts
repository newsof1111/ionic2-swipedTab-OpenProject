import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MultiPickerModule } from 'ion-multi-picker';
import { FabToolbar } from '../components/fab-toolbar/fab-toolbar';
import { ionSlideTabs } from '../components/swipedtab/swipedtab';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FabToolbar,
    ionSlideTabs
  ],
  imports: [
    IonicModule.forRoot(MyApp)
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FabToolbar,
    ionSlideTabs
  ],
  providers: []
})
export class AppModule {}
