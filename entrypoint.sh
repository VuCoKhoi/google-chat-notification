#!/bin/bash
set -e

echo "INPUT_PROJECT=${INPUT_PROJECT}"
echo "INPUT_MESSAGE=${INPUT_MESSAGE}"
echo "INPUT_COMMIT=${INPUT_COMMIT}"
echo "INPUT_BRANCH=${INPUT_BRANCH}"
echo "INPUT_STATUS=${INPUT_STATUS}"
echo "INPUT_ACTIONID=${INPUT_ACTIONID}"
echo "INPUT_WEBHOOK=${INPUT_WEBHOOK}"
echo "HOME=${HOME}"
echo "GITHUB_JOB=${GITHUB_JOB}"
echo "GITHUB_REF=${GITHUB_REF}"
echo "GITHUB_SHA=${GITHUB_SHA}"
echo "GITHUB_REPOSITORY=${GITHUB_REPOSITORY}"
echo "GITHUB_REPOSITORY_OWNER=${GITHUB_REPOSITORY_OWNER}"
echo "GITHUB_RUN_ID=${GITHUB_RUN_ID}"
echo "GITHUB_RUN_NUMBER=${GITHUB_RUN_NUMBER}"
echo "GITHUB_RETENTION_DAYS=${GITHUB_RETENTION_DAYS}"
echo "GITHUB_RUN_ATTEMPT=${GITHUB_RUN_ATTEMPT}"
echo "GITHUB_ACTOR=${GITHUB_ACTOR}"
echo "GITHUB_WORKFLOW=${GITHUB_WORKFLOW}"
echo "GITHUB_HEAD_REF=${GITHUB_HEAD_REF}"
echo "GITHUB_BASE_REF=${GITHUB_BASE_REF}"
echo "GITHUB_EVENT_NAME=${GITHUB_EVENT_NAME}"
echo "GITHUB_SERVER_URL=${GITHUB_SERVER_URL}"
echo "GITHUB_API_URL=${GITHUB_API_URL}"
echo "GITHUB_GRAPHQL_URL=${GITHUB_GRAPHQL_URL}"
echo "GITHUB_REF_NAME=${GITHUB_REF_NAME}"
echo "GITHUB_REF_PROTECTED=${GITHUB_REF_PROTECTED}"
echo "GITHUB_REF_TYPE=${GITHUB_REF_TYPE}"
echo "GITHUB_REF_TYPE=${GITHUB_REF_TYPE}"


npm run start