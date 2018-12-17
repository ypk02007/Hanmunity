# Hanmunity

웹 로컬 실행 방법
1. mongodb, nodejs를 설치한다.
2. mongodb의 환경변수를 설정한다.(mongodb가 설치된 경로의 bin)
3. 커맨드 입력 창에 mongod --dbpath "mongodb가 설치된 경로"를 입력해 mongodb를 실행한다.
4. 다른 커맨드 입력 창에서 hanmunity 경로를 찾아가서 node ./bin/www를 입력해 실행한다.
5. 웹 브라우저 주소에 localhost:3000을 입력한다.

Angular material 설치
https://material.angular.io/guide/getting-started (여기서 step1 ~ step5 까지 따라 하면됩니다)

1.npm install --save @angular/material @angular/cdk @angular/animations
2.import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }

3.import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})
export class PizzaPartyAppModule { }

4.@import "~@angular/material/prebuilt-themes/indigo-pink.css";

5.npm install --save hammerjs

6.import 'hammerjs';

앱 실행 방법
1. Android Studio를 설치한다.
2. MyApp을 불러온다.
3. 실행시킨다.
