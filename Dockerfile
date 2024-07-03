# Stage 1: Build Angular app
FROM node:20 as build-angular
WORKDIR /app
COPY angular-app/package.json angular-app/package-lock.json ./
RUN npm install
COPY angular-app/ ./
RUN npm run build --prod

# Stage 2: Build Spring Boot app
FROM maven:3.9.5-jdk-17 as build-spring
WORKDIR /app
COPY springboot-app/pom.xml .
COPY springboot-app/src ./src
COPY --from=build-angular /app/dist/ ./src/main/resources/static/
RUN mvn clean package -DskipTests

# Stage 3: Run the application
FROM openjdk:17-jre-slim
WORKDIR /app
COPY --from=build-spring /app/target/springboot-app.jar ./app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]