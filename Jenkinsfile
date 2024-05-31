pipeline {
    agent any

    tools {
        nodejs 'NodeJS 20'
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKERHUB_USERNAME = 'Parzival'
        PATH = "C:/Program Files/Docker;C:/Program Files/Docker/Docker/resources/bin;${env.PATH}"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                bat 'npm run test'
            }
        }
        stage('Code Quality Analysis') {
            steps {
                echo 'Running Code Quality Analysis...'

            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                script {
                    bat 'docker-compose -f docker-compose.yml up -d --build'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def app = docker.build("${DOCKERHUB_USERNAME}/wakecup-website:latest")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        app.push()
                    }
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                script {
                    sshagent(['production-server-credentials']) {
                        bat '''
                        docker pull ${DOCKERHUB_USERNAME}/wakecup-website:latest
                        docker-compose -f docker-compose.prod.yml up -d
                        '''
                    }
                }
            }
        }
        stage('Monitoring and Alerting') {
            steps {
                echo 'Setting up Monitoring and Alerting...'
 
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
    }
}
