#!/bin/bash

yarn unlink @entipic/domain
yarn unlink mongo-item

yarn add @entipic/domain
yarn add mongo-item

yarn test
