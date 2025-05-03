# Jenkins Fundamentals  

## Installation  
- Downloadable WAR file, native packages for various OS.  

## Access  
- Typically through a web browser on port 8080 (default).  

## What is Jenkins?  
- An open-source automation server.  
- Primarily used for Continuous Integration (CI) and Continuous Delivery (CD).  
- Automates build, test, and deployment processes.  
- Extensible through a vast plugin ecosystem.  

## Core Concepts  
- **Jobs/Projects**: Automated tasks defined in Jenkins (e.g., build a Java project, deploy to a server).  
- **Pipelines**: A series of interconnected jobs that define a CD workflow as code.  
- **Nodes/Agents**: Machines where Jenkins executes jobs. The master node manages agents.  
- **Stages (in Pipelines)**: High-level steps in a Pipeline (e.g., Build, Test, Deploy).  
- **Steps (in Pipelines)**: Individual actions within a Stage (e.g., checkout, mvn, sh).  
- **Plugins**: Extend Jenkins functionality (e.g., Git integration, Maven support, cloud integrations).  
- **Credentials**: Securely stored information like usernames, passwords, API tokens.  
- **Workspaces**: Directories on nodes where Jenkins performs job-related tasks.  
- **Artifacts**: Output files produced by a build (e.g., JAR, WAR files, reports).  

## Jenkins Architecture  
- **Master Node**: Central controller, manages agents, schedules jobs, presents the UI.  
- **Agent Nodes (Slaves)**: Execute the actual build and test tasks as directed by the master.  
- **Communication**: Master communicates with agents using protocols like SSH or JNLP.  

## Initial Setup  
- Unlocking Jenkins using the `initialAdminPassword`.  

## Plugin Management  
- Installing, updating, and managing plugins through the Jenkins UI.  

## User and Permission Management  
- Creating users, defining roles, and assigning permissions (using built-in or plugin-based security).  

## Node Management  
- Adding and configuring agent nodes.  

---

# Creating and Managing Jobs/Projects  

## Types of Jobs  
- **Freestyle Projects**: Traditional, UI-configured jobs with a series of build steps.  
- **Pipeline Projects**: Jobs defined using the Jenkins Pipeline DSL (Declarative or Scripted).  
- **Multi-configuration Projects**: Running the same job with different environment combinations.  
- **Folder Projects**: Organizing jobs into logical groups.  

## Configuring Jobs  
- **Source Code Management (SCM)**: Integrating with Git, SVN, etc.  
- **Build Triggers**: Defining when a job should run (e.g., on SCM changes, periodically, after another job).  
- **Build Environment**: Setting up environment variables, using credentials.  
- **Build Steps**: Defining the actions to perform (e.g., shell commands, Maven goals, Gradle tasks).  
- **Post-build Actions**: Actions to perform after a build (e.g., archiving artifacts, sending notifications, deploying).  

---

# Jenkins Pipelines  

## Pipeline as Code  
- Defining CD workflows in a `Jenkinsfile` (typically located at the root of the repository).  

## Types of Pipelines  
- **Declarative Pipeline**: A more structured and opinionated syntax for defining pipelines.  
- **Scripted Pipeline**: More flexible and powerful, based on Groovy.  

## Common Pipeline Syntax  
```groovy  
pipeline {  
    agent any  
    stages {  
        stage('Build') {  
            steps {  
                sh 'mvn clean install'  
            }  
        }  
        stage('Test') {  
            steps {  
                junit '**/target/surefire-reports/*.xml'  
            }  
        }  
        stage('Deploy') {  
            steps {  
                sh './deploy.sh'  
            }  
        }  
    }  
    post {  
        success {  
            echo 'Build succeeded!'  
        }  
        failure {  
            echo 'Build failed!'  
        }  
    }  
}  
```  

---

# Working with Plugins  

## Finding Plugins  
- Jenkins Plugin Index (plugins.jenkins.io).  

## Installation  
- Through the Jenkins UI (Manage Jenkins -> Plugins).  

## Common Plugins  
- Git, GitHub, GitLab, Bitbucket Integration  
- Maven Integration  
- Gradle Integration  
- JUnit, TestNG Result Archiver  
- SonarQube Scanner  
- Docker Pipeline  
- Kubernetes CD  
- AWS, Azure, GCP Integration  
- Email Extension Plugin  
- Slack, Microsoft Teams Notification Plugins  
- Credentials Plugin  
- Pipeline Groovy Libraries  

---

# Security in Jenkins  

## Authentication  
- Defining how users access Jenkins (e.g., Jenkins' own user database, LDAP, Active Directory).  

## Authorization  
- Controlling what users can do within Jenkins (e.g., read access, build permission, admin rights).  

## Credentials Management  
- Securely storing sensitive information.  

## Agent Security  
- Controlling agent access and permissions.  

## Security Hardening  
- Best practices to secure your Jenkins instance.  

---

# Common Interview Questions  

- What is Jenkins and what are its benefits?  
- Explain the Jenkins architecture (master and agents).  
- What is a Jenkins job/project? What are the different types?  
- What is a Jenkins Pipeline? What are the advantages of using Pipelines?  
- What is the difference between Declarative and Scripted Pipelines?  
- Explain the key components of a Jenkins Pipeline (agent, stages, steps, post).  
- How do you integrate Jenkins with Git (or another SCM)?  
- How do you trigger Jenkins jobs?  
- How do you manage dependencies in a Jenkins build (e.g., for Maven or Gradle projects)?  
- How do you handle testing in Jenkins?  
- How do you manage artifacts in Jenkins?  
- How do you configure notifications in Jenkins?  
- How do you manage credentials in Jenkins?  
- How do you add and manage agent nodes?  
- How do you secure a Jenkins instance?  
- What are some common Jenkins plugins you have used?  
- How do you troubleshoot build failures in Jenkins?  
- How do you define environment variables in Jenkins?  
- What are Jenkins workspaces?  
- What are downstream and upstream jobs?  
- How can you parameterize Jenkins jobs/pipelines?  

---

# Remember to Mention  

- Your experience with specific Jenkins versions and plugins.  
- Any best practices you follow when using Jenkins.  
- How Jenkins fits into the overall CI/CD process in your previous roles.  
- Any challenges you faced with Jenkins and how you resolved them.  



# Jenkins Pipeline (.yml) Cheat Sheet for Interviews

## Note:
Jenkins primarily uses Groovy for its Pipeline DSL. The `.yml` extension is typically associated with other CI/CD tools like GitLab CI or GitHub Actions.

If the interviewer asks about a `jenkins.yml` file, they might be:
1. Mistaken about the file extension (expecting `Jenkinsfile`).
2. Asking about a specific plugin that uses YAML configuration.
3. Testing your understanding of CI/CD concepts across different tools.

Assuming they are open to discussing YAML-based CI/CD concepts that *could* be applied to Jenkins (or if a specific plugin is mentioned), here's a conceptual cheat sheet based on common YAML CI/CD structures:

---

## Top-Level Structure (Conceptual)

(In a Jenkinsfile, this would be the `pipeline` block)

```yaml
pipeline:
    # 'agent': Specifies where the pipeline or stage will run.
    # (In Jenkins, this maps to 'agent' directives)
    agent:
        # Similar to 'agent any' in Jenkins
        type: any
        # Similar to 'agent { label '...' }' in Jenkins
        label: my-agent-label
        # More specific agent configuration (if a YAML-based plugin supports it)
        kubernetes:
            namespace: my-namespace
            pod_label: jenkins-agent

    # 'stages': Defines the different stages of the pipeline.
    # (Corresponds directly to the 'stages' block in Jenkins)
    stages:
        - stage: 'Checkout'
            # 'steps': Defines the actions to be performed in this stage.
            # (Corresponds to the 'steps' block in Jenkins)
            steps:
                - name: 'Checkout Source Code'
                    # Equivalent to 'checkout scm' in Jenkins
                    checkout:
                        repository: 'https://github.com/example/myrepo.git'
                        branch: 'main'

        - stage: 'Build'
            agent:
                type: docker
                image: 'maven:3.8.1-jdk-11'
            steps:
                - name: 'Build with Maven'
                    # Equivalent to 'sh "mvn clean package"' in Jenkins
                    execute: 'mvn clean package'

        - stage: 'Test'
            steps:
                - name: 'Run Unit Tests'
                    # Equivalent to 'sh "mvn test"' and JUnit result archiving
                    test:
                        command: 'mvn test'
                        report_format: 'junit'
                        report_path: 'target/surefire-reports.xml'

        - stage: 'Deploy'
            # Conditional execution (similar to 'when' in Jenkins Declarative Pipeline)
            when:
                branch: 'production'
            steps:
                - name: 'Deploy to Production'
                    # Placeholder for deployment command/plugin
                    execute: 'deploy-script.sh production'
                    credentials: 'prod-deploy-key' # Referencing credentials
```

---

## Key Concepts and Potential Mappings to Jenkins

- **`agent`**: Defines the execution environment (can map to Jenkins agent labels, Docker agents, Kubernetes pods).
- **`stages`**: Logical grouping of steps in the workflow (direct mapping to Jenkins `stages`).
- **`stage`**: A specific stage with a name (direct mapping to Jenkins `stage`).
- **`steps`**: A list of tasks to execute within a stage (direct mapping to Jenkins `steps`).
- **`name`**: A human-readable name for a step (can be part of Jenkins step description).
- **`checkout`**: For checking out source code (maps to `checkout scm` or specific SCM plugins in Jenkins).
- **`execute`**: For running shell commands (maps to `sh` or `bat` steps in Jenkins).
- **`test`**: For running tests and potentially processing reports (maps to test execution commands and result archiving plugins like JUnit).
- **`when`**: Conditional execution of stages or steps (maps to `when` directive in Jenkins Declarative Pipeline).
- **`credentials`**: Referencing stored credentials (maps to Jenkins `withCredentials` step).
- **`environment`**: Defining environment variables (maps to `environment` directive in Jenkins Pipeline).
- **`matrix`**: Running stages with different combinations of parameters (maps to Jenkins multi-configuration projects or matrix builds in Pipelines).
- **`services`**: Defining linked services (common in Docker-based CI, might map to Docker Compose in Jenkins).
- **`artifacts`**: Defining files to be saved after the build (maps to `archiveArtifacts` step in Jenkins).

---

## Interview Tips if Asked About `jenkins.yml`

1. Acknowledge the common use of `Jenkinsfile` with Groovy.
2. Ask for clarification: "Are you referring to a specific plugin that uses YAML configuration?"
3. If they seem to expect a YAML-based Jenkinsfile, you can:
     - Explain that while Jenkins primarily uses Groovy, the *concepts* of CI/CD workflows (stages, steps, agents, etc.) are similar across tools that use YAML.
     - Use your knowledge of YAML-based CI/CD from other tools (like GitLab CI or GitHub Actions) to discuss how those concepts might be represented in a hypothetical `jenkins.yml`.
     - Focus on the *structure* and *purpose* of different sections (as shown in the conceptual example above), relating them back to their equivalents in Jenkins Groovy DSL where possible.
4. If a specific plugin is mentioned, focus on the YAML configuration structure that the plugin might use (refer to the plugin's documentation if you know it).

---

## Example of a Hypothetical YAML-Based Jenkins Plugin Configuration

(This is speculative and depends on whether such a plugin exists and its syntax)

```yaml
jenkins_plugin_config:
    my-custom-builder:
        version: '1.0'
        parameters:
            input_file: 'config.json'
            output_dir: '/tmp/output'
```

By focusing on the underlying CI/CD concepts and being clear about Jenkins' primary use of Groovy, you can navigate this potentially tricky question effectively.