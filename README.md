# 사전 필수 설치

## VSCode 설치
소스 코드의 편집 및 내용을 확인하기 위해 아래 Editor 를 설치해주세요.  
https://code.visualstudio.com/

## ts-node 설치
예제는 typescript 로 작성되어 있습니다. typescript 를 컴파일 하고 실행하기 위한 module 을 설치해주세요.
```
npm install -g typescript
```

## mocha 설치
Unit 테스트 실행을 위한 Mocha 를 설치 합니다.
```
  npm install mocha -g
```

# 따라하기
## 빌드 및 테스트
실행에 필요한 관련된 라이브러리를 다운로드 하고 구성합니다.
```
npm install
```  
빌드가 되는지 확인합니다.
```
npm run build
```

## 워크벤치에 접속하여 테이블 생성하기
설치된 워크 벤치를 실행하고, 로컬 Connection 을 접속하여, 필요한 테이블을 생성합니다. Connection 을 위한 key 정보를 .env 에 설정합니다.

## 1. 주문 데이터 생성하기 
```
C:\Users\leehee\github\serverless-samples\lambda-ddb-app>test.bat .\src\test\order\infra\CreateOrder.ts
```

## 2. 주문 데이터 가져오기 
```
C:\Users\leehee\github\serverless-samples\lambda-ddb-app>test.bat .\src\test\order\infra\GetOrder.ts
```

## 3. 나의 주문 데이터 조회하기 
```
C:\Users\leehee\github\serverless-samples\lambda-ddb-app>test.bat .\src\test\order\infra\GetOrder.ts
```

## 4. 나의 주문 데이터 조회하기 
```
C:\Users\leehee\github\serverless-samples\lambda-ddb-app>test.bat .\src\test\order\infra\FindByUserId.ts
```

## 5. GSI 를 추가해서 데이터를 조회해 보기 
```
C:\Users\leehee\github\serverless-samples\lambda-ddb-app>test.bat .\src\test\order\infra\FindByOrderDate.ts
```

## 6. 스키마를 추가 해보기



# 기타 참고
## ESLint Check
```npm run lint```

## Test Coverage
```npm run coverage```


