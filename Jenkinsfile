pipeline {
    agent any

    tools {
        nodejs 'NodeJS 20'
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
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                script {

                    bat 'docker --version'
                    bat 'docker-compose --version'


                    bat 'docker-compose -f docker-compose.yml up -d --build'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
    }
}
