#!/bin/bash

API="http://localhost:4741"
URL_PATH="/users"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "user": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirm": "'"${PASSWORD}"'",
      "firstName": "'"${FIRSTNAME}"'",
      "lastName": "'"${LASTNAME}"'",
      "city": "'"${CITY}"'",
      "state": "'"${STATE}"'",
      "country": "'"${COUNTRY}"'",
      "languages": "'"${LANGUAGES}"'",
      "yearsOfExp": "'"${YEARS}"'",
      "role": "'"${ROLE}"'",
      "gitHub": "'"${GIT}"'",
      "linkedIn": "'"${LINKEDIN}"'",
      "proPic": "'"${IMAGE}"'"
    }
  }'

echo
