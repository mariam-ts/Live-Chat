import { CardviewComponent } from "./cardview/cardview.component";
import { LogInComponent } from "./log-in/log-in.component";
import { LoginFooterComponent } from "./login-footer/login-footer.component";
import { MessageBodyComponent } from "./message-body/message-body.component";
import { MessageSidebarComponent } from "./message-sidebar/message-sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RegisterComponent } from "./register/register.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToggleComponent } from "./toggle/toggle.component";

export * from './log-in/log-in.component';
export * from './navbar/navbar.component';
export * from './sidebar/sidebar.component';
export * from './message-sidebar/message-sidebar.component';
export * from './login-footer/login-footer.component';
export * from './message-body/message-body.component';

export const components = [
    LogInComponent,
    NavbarComponent,
    SidebarComponent,
    MessageSidebarComponent,
    LoginFooterComponent,
    MessageBodyComponent,
    ToggleComponent,
    CardviewComponent,
    RegisterComponent
  ];
  