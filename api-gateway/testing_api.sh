#!/bin/bash

for i in {1..150}; do
  curl http://localhost:3000/api/tasks
  echo ""
done
# chmod +x test_api.sh