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
                
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            
        }
    }
}
