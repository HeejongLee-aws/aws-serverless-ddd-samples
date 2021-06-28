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
```
npm install
```  
```
npm run build
```

## 워크벤치에 접속하여 테이블 생성하기


## Windows 환경에서 유닛 테스트 

```
C:\Users\leehee\github\serverless-samples\lambda-ddb-app>test.bat .\src\test\order\infra\OrderDynamoDbRepository.spec.ts
```

## 워크벤치에서 테이블 내용 조회


## 스키마를 추가 해보기



# 기타 참고
## ESLint Check
```npm run lint```

## Test Coverage
```npm run coverage```


