#!/bin/bash

usage="deploys AdWords website to Compute Engine. Must provide an image version #.
usage: build-deploy.sh [v#]"

if [ "$#" -ne 1 ]; then
    echo "$usage"    
    exit 1
fi

version=$1

yarn run build

docker rm l3-adwords-container
docker rmi us.gcr.io/leedslooklisten-com/l3-adwords:$version
GOOS=linux go build
docker build -t us.gcr.io/leedslooklisten-com/l3-adwords:$version .

docker push us.gcr.io/leedslooklisten-com/l3-adwords:$version

# for local docker testing
# docker build -t us.gcr.io/leedslooklisten-com/l3-adwords:0.1 .
# docker run --name l3-adwords-container -p 8080:80 -e ENV=local-docker-dev us.gcr.io/leedslooklisten-com/l3-adwords:0.1


# for GCP cloud docker

# ssh into Compute Engine instance
gcloud compute --project "leedslooklisten-com" ssh --zone "us-west1-b" "l3-website-host" << EOF

docker ps -a

docker stop l3-adwords-container
docker rm l3-adwords-container
docker pull us.gcr.io/leedslooklisten-com/l3-adwords:$version
docker run --name l3-adwords-container -d -p 80:80 -e ENV=compute-engine us.gcr.io/leedslooklisten-com/l3-adwords:$version

EOF

echo "returned from SSH session"