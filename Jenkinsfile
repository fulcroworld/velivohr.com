/* groovylint-disable CompileStatic, DuplicateStringLiteral */
pipeline {
    agent any

    environment {
        DEPLOY_APP = "${params.DEPLOY_APP}" // frontend
        GH_PAT = credentials('ibsf-devops-gh-bot-pat')
        GH_ORG_REPO = "fulcroworld/velivohr.com"
        GH_BRANCH = "dev-harshad"
        DOCKER_PROJECT = "velivo-hr"
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkoutCode(env.GH_PAT, env.GH_ORG_REPO, env.GH_BRANCH)
                }
            }
        }

        stage('Stop & Remove Old Containers') {
            steps {
                script {
                    stopAndRemove(env.DEPLOY_APP, env.DOCKER_PROJECT)
                }
            }
        }

        stage('Build & Deploy') {
            steps {
                script {
                    deployApp(env.DEPLOY_APP, env.DOCKER_PROJECT)
                }
            }
        }

        stage('Docker cleanup') {
            steps {
                script {
                    cleanupDocker()
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo "✅ Deployment successful for (${env.DOCKER_PROJECT}-${env.DEPLOY_APP})."
        }
        failure {
            echo "❌ Deployment failed for (${env.DOCKER_PROJECT}-${env.DEPLOY_APP})."
        }
    }
}

/* ------------------ FUNCTIONS ------------------ */
void checkoutCode(String ghPat, String ghOrgRepo, String ghBranch) {
    echo "📥 Checking out branch: ${ghBranch}"

    try {
        git url: "https://${ghPat}@github.com/${ghOrgRepo}.git", branch: "${ghBranch}"
    } catch (err) {
        error "Git checkout failed: ${err.message}"
    }
}

void stopAndRemove(String appType, String project) {
    echo "🛑 Stopping/removing old (${env.DOCKER_PROJECT}-${appType}) container..."

    try {
        sh "docker compose -p ${project} stop ${appType} || echo 'No running container to stop.'"
        sh "docker compose -p ${project} rm -f ${appType} || echo 'No stopped container to remove.'"
    } catch (err) {
        echo "⚠️ Warning: cleanup of (${env.DOCKER_PROJECT}-${appType}) failed: ${err.message}"
    }
}

void deployApp(String appType, String project) {
    echo "🚀 Building & deploying (${env.DOCKER_PROJECT}-${appType})..."

    try {
        sh "docker compose -p ${project} up -d --build ${appType}"
    } catch (err) {
        error "Failed building/deploying (${env.DOCKER_PROJECT}-${appType}): ${err.message}"
    }
}

void cleanupDocker() {
    echo '🧹 Cleaning up unused Docker resources...'

    try {
        sh '''
            docker image prune -af || echo "No dangling images."
            # docker volume prune -f || echo "No dangling volumes."
            docker network prune -f || echo "No dangling networks."
        '''
    } catch (err) {
        echo "⚠️ Docker cleanup failed (non-blocking): ${err.message}"
    }
}