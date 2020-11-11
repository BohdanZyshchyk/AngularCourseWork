import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule, NotifierOptions } from "angular-notifier";
import { DemoNgZorroAntdModule } from "./ng-zorro.module";



import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AdminAreaComponent } from './Admin-area/Admin-area.component';
import { ClientAreaComponent } from './Client-area/Client-area.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { ProductListComponent } from './Admin-area/product-list/product-list.component';
import { AddProductComponent } from './Admin-area/add-product/add-product.component';
import { MemeListComponent } from './Client-area/meme-list/meme-list.component';
import { MemeComponent } from './Client-area/meme/meme.component';
import { CommentListComponent } from './Client-area/meme/comment-list/comment-list.component';
import { CommentComponent } from './Client-area/meme/comment/comment.component';
import { AddCommentComponent } from './Client-area/meme/add-comment/add-comment.component';
import { AddMemeComponent } from './Client-area/meme/add-meme/add-meme.component';
import { AnimHomeComponent } from './home/anim-home/anim-home.component';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
const configNotifier: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right'
    },
    vertical: {
      position: 'top'
    }
  }
};


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AdminAreaComponent,
    ClientAreaComponent,
    SignUpComponent,
    SignInComponent,
    ProductListComponent,
    AddProductComponent,
    MemeListComponent,
    MemeComponent,
    CommentListComponent,
    CommentComponent,
    AddCommentComponent,
    AddMemeComponent,
    AnimHomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    NotifierModule.withConfig(configNotifier),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    
  ],
  providers: [NgxSpinnerService,
  {provide: NZ_ICONS, useValue:icons}],
  bootstrap: [AppComponent]})
export class AppModule { }
