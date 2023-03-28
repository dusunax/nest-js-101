# node 16-alpine base 이미지를 사용합니다.
FROM node:16-alpine

# 컨테이너 내부의 작업 디렉토리를 /app으로 설정합니다.
WORKDIR /app
# 호스트의 package.json, package-lock.json 파일을 컨테이너의 현재 디렉토리에 복사합니다.
COPY package.json package-lock.json ./

# npm install 명령어를 실행하여 앱의 의존성을 설치합니다.
RUN npm install

# 호스트와 연결할 포트 번호를 지정합니다.
EXPOSE 3355

# 현재 호스트 디렉토리의 모든 파일을 컨테이너의 현재 디렉토리에 복사합니다.
COPY . .
# npm run build 명령어를 실행하여 앱을 빌드합니다.
RUN npm run build
# 컨테이너가 시작될 때 실행할 명령어를 지정합니다.
CMD npm run start
