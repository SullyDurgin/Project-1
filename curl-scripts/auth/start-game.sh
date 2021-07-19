
curl "https://tic-tac-toe-api-development.herokuapp.com/new-game" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"{$EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'
echo
