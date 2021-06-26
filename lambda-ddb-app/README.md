### 로컬 Dynamodb 환경 구성

1. 도커 네트워크를 생성합니다.
> - `docker network create local-api-network`

2. dynamodb 컨테이너를 실행합니다. 8000 포트를 사용하며, 앞서 생성한 네트워크에 바인딩하며, dynamo-local 이라는 이름으로 실행됩니다.
> - `docker run -d -p8000:8000 --network=local-api-network --name dynamo-local amazon/dynamodb-local`
   
윈도우즈 환경에서 도커를 삭제하고 싶다면,  
> - `FOR /f "tokens=*" %i IN ('docker ps -a -q') DO docker rm --force %i`
> - `docker rm `docker ps -a -q`

3. 로컬에서 정상적으로 실행이 되었다면, NoSQLWorkBench 를 실행하여, 실행된 Dynamodb 의 접속하기 위한 Profile 을 확인합니다.
   > `aws configure --profile dynamodb-local 을 실행하여 로컬 환경에서 실행합니다.`
   
   예)
   >sogori:member heejonglee$ aws configure --profile dynamodb-local
   AWS Access Key ID [None]: jo4gx
   AWS Secret Access Key [None]: zir3d
   Default region name [None]: localhost
   Default output format [None]: 
   

4. Dynamodbd 에 정상적으로 접속이 되는지 확인합니다.
   > `aws dynamodb list-tables --endpoint-url http://localhost:8000 --profile dynamodb-local`

5. 결제를 위한 Dynamodb 테이블을 생성합니다.
   > `aws dynamodb create-table --table-name Attendance --attribute-definitions AttributeName=PK,AttributeType=S AttributeName=SK,AttributeType=S  --key-schema AttributeName=PK,KeyType=HASH AttributeName=SK,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --endpoint-url http://localhost:8000 --profile dynamodb-local` 


aws dynamodb update-table  --table-name Payment  --attribute-definitions AttributeName=TopScore,AttributeType=N  --global-secondary-index-updates "[{\"Create\": {\"IndexName\": \"GSI-SK\", \"KeySchema\": [{\"AttributeName\":\"SK\",\"KeyType\":\"HASH\"}], \"Projection\":{\"ProjectionType\":\"ALL\" }}}]"
1. 테이블을 삭제하고 싶다면, 
   > `aws dynamodb delete-table --table-name Payment --endpoint-url http://localhost:8000 --profile dynamodb-local`
   > `aws dynamodb delete-table --table-name PaymentClass --endpoint-url http://localhost:8000 --profile dynamodb-local`

## Docker compose setup 

# 빌드 및 테스트

## build
   > `npm install`  
   > `npm run build`

## Test (SAM)
   > `npm run build`

## 결제정보를 생성을 테스트 한다.
   > `sam local invoke -t .aws-sam/build/template.yaml PaymentFunction -e events/getPayment.json --docker-network local-api-network --profile dynamodb-local`

## 저장된 결제 정보를 조회를 테스트 한다.
   > `sam local invoke -t .aws-sam/build/template.yaml PaymentFunction -e events/createPayment.json --docker-network local-api-network --profile dynamodb-local`

## ESLint Check
   > `npm run lint`

## Unit Test
   > `npm run test`

## Test Coverage
   > `npm run coverage`

## API Gateway 에서 테스트


##ㄴ 파일 단위로 테스트
 `mocha --require ts-node/register <파일명>`

### PG 카드 인증 샘플
