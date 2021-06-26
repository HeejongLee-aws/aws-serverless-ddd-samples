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
uniquename=&res_msg=%C1%A4%BB%F3%C3%B3%B8%AE&escw_used=N&req_tx=pay&response_type=JSON&trace_no=T0000C2KV7KHOHGG&buyr_tel2=0100000000&an_key=2020120250145965&buyr_mail=abc%40naver.com&media_type=MC02&card_pay_method=V3D&quota=1&return_url=https%3A%2F%2Fuguoghckoh.execute-api.ap-northeast-2.amazonaws.com%2FProd%2FupdateKcpAuth&currency=410&enc_type=NO&pay_module=PMMH&ssgpay_direct=Y&good_name=%3F%3F%3F%3F+%D7%DD%BD%EC%3F%3F%3F%3F%3F%3F-%EA%B4%B4%EB%AC%BC+%3F%3F%EB%B0%3F%EB%B0%3F%286%7E7%3F%3F%29-11%2F15&kcp_ret_cancel_url=&card_code=CCSS&quotaopt=12&tablet_size=1.0&pay_method=CARD&shop_name=Emart+Culture+Club&log_number=PN01&res_cd=0000&log_request=LRJV&enc_cardno_yn=Y&site_cd=T0000&good_mny=105000&payco_direct=N&Ret_URL=https%3A%2F%2Fuguoghckoh.execute-api.ap-northeast-2.amazonaws.com%2FProd%2FupdateKcpAuth&cmd=HUB&ordr_idxx=2020120211302900000000000000000000000001&quota_month=1&xid=MjAyMDEyMDIyMDMxMDcyNDY1NTg%3D&eci=05&cavv=AAABBjR3hiAgEgIgMXeGAJAAAAA%3D&card_no=536148**********&card_enc_no=rZuZDSrr9zSI4tb1TFXk2X5ZofXk4v87X1LqJLG5d8c%3D&using_point=&save_useyn=&join_cd=&expiry_yy=79&expiry_mm=12&lgpay_enc_data=&card_lg_pay_yn=&order_id=2020120211302900000000000000000000000001&pay_type=PACA&service_cd=WS10&status_cd=STAU&trace_log_id=T0000C2KV7KHOHGG


### SSM 파라매터 변경으로 인해 버전 변경이 필요했음
/enrollment/skyhi/validateEnrollmentInPaymentSqsQueue:2
/enrollment/skyhi/beginEnrollmentSqsQueue:2
/enrollment/skyhi/endEnrollmentSqsQueue:2
/enrollment/skyhi/removeCartSqsQueue:2


## PowerShell 권한 확인
1. windows PowerShell 프로그램을 관리자 권한으로 실행합니다.
2. Get-ExecutionPolicy 명령어를 작성하면 본인의 권한? 상태가 보여집니다.
3. 권한이 RemoteSigned 가 아니라면 Set-ExecutionPolicy RemoteSigned 를 입력
4. Get-ExecutionPolicy 명령어로 다시 한번 확인 하면 RemoteSigned로 변경 확인.


aws dynamodb update-table  --table-name Payment  --attribute-definitions AttributeName=SK,AttributeType=S  --global-secondary-index-updates "[{\"Create\": {\"IndexName\": \"GSI-SK\", \"KeySchema\": [{\"AttributeName\":\"SK\",\"KeyType\":\"HASH\"}], \"Projection\":{\"ProjectionType\":\"ALL\" }}}]"

..

-------------------------------
1. 수강횟수
2. 캐셔이림
3. 취소담당자


-----------------------------
카드번호
카드사 (CARD_NAME)
카드유효날짜
