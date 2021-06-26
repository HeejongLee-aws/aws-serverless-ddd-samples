#!/bin/sh

aws dynamodb delete-table --table-name Attendance --endpoint-url http://localhost:8000 --profile dynamodb-local;