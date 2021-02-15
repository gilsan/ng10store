
import { InjectionToken } from '@angular/core';
// 주입 대상 토큰
export interface tokenConfig {
  url: string;
  port: string;
}

// 주입 대상의 값
export const MY_TOKEN_CONFIG: tokenConfig = {
  url: 'ngsubject.firebaseapp.com',
  port: '80'
};

// tokenConfig
export const TOKEN_CONFIG = new InjectionToken<tokenConfig>('token.config');

