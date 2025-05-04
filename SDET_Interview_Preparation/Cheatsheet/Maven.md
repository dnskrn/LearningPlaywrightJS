# Maven Fundamentals

## Maven Lifecycle Phases
- **validate**: Validates the project structure and POM.
- **compile**: Compiles the project's source code.
- **test**: Runs unit tests.
- **package**: Packages the compiled code into a distributable format (e.g., JAR, WAR).
- **verify**: Runs integration tests and performs other checks.
- **install**: Installs the package into the local Maven repository (`~/.m2/repository`).
- **deploy**: Copies the final package to a remote repository for sharing.

## Project Object Model (POM)
- **pom.xml**: The heart of a Maven project. Describes the project's configuration, dependencies, build process, reporting, and more.

### Key POM Elements
- `<project>`: The root element.
- `<modelVersion>`: Specifies the POM version (usually `4.0.0`).
- `<groupId>`: Unique identifier of the organization or group that owns the project (e.g., `com.example`).
- `<artifactId>`: Unique identifier of the project within the group (e.g., `my-app`).
- `<version>`: Version of the project (e.g., `1.0-SNAPSHOT`, `1.0.0`).
- `<packaging>`: Type of artifact produced (e.g., `jar`, `war`, `pom`).
- `<name>`: Human-readable name of the project.
- `<dependencies>`: Lists the project's dependencies.
- `<dependency>`: Defines a single dependency, including `groupId`, `artifactId`, and `version`.
- `<build>`: Configures the project's build process, including plugins.
- `<plugins>`: Lists Maven plugins used during the build lifecycle.
- `<plugin>`: Defines a single plugin, including `groupId`, `artifactId`, and `version`.
- `<repositories>`: Lists remote repositories where Maven can download dependencies.
- `<repository>`: Defines a single repository, including `id`, `url`, and (optional) layout.
- `<properties>`: Defines reusable properties (variables) within the POM.

## Maven Goals
- Specific tasks that plugins can execute within a lifecycle phase.
- **Syntax**: `<plugin-prefix>:<goal-name>` (e.g., `compiler:compile`, `surefire:test`).

## Maven Plugins
- Extend Maven's functionality by providing goals for various tasks (compilation, testing, packaging, etc.).
- **Core plugins**: Part of Maven itself.
- **Community/third-party plugins**: Examples include:
    - `maven-compiler-plugin`
    - `maven-surefire-plugin`
    - `maven-war-plugin`

## Maven Repositories
- **Local Repository**: `~/.m2/repository` - a cache on your local machine.
- **Central Repository**: Maven's default public repository (`repo1.maven.org/maven2`).
- **Remote Repositories**: Configured in the POM to access artifacts not in the Central Repository.

## Maven Dependencies
- **Transitive Dependencies**: Dependencies of your direct dependencies. Maven manages these automatically.
- **Dependency Scope**:
    - `compile` (default): Available in all classpaths.
    - `provided`: Expected to be provided by the runtime environment (e.g., servlet API in a web server).
    - `runtime`: Needed during runtime but not for compilation.
    - `test`: Only needed for compiling and running tests.
    - `system`: Similar to `provided` but requires explicitly specifying the path to the JAR.
    - `import`: Only used for `<dependencyManagement>` in POM files with packaging type `pom`.

## Maven Build Process
1. Reads the `pom.xml` file.
2. Downloads dependencies from configured repositories.
3. Executes the defined lifecycle phases and goals.
4. Produces the project's artifact.

---

# Common Maven Commands
- `mvn clean`: Removes the `target` directory (where build output is stored).
- `mvn compile`: Compiles the project's source code.
- `mvn test`: Runs unit tests.
- `mvn package`: Packages the compiled code (e.g., creates a JAR or WAR file).
- `mvn install`: Installs the packaged artifact into the local Maven repository.
- `mvn deploy`: Deploys the packaged artifact to a remote repository.
- `mvn validate`: Validates the project's POM file.
- `mvn verify`: Runs verification checks (e.g., integration tests).
- `mvn dependency:tree`: Displays the project's dependency tree.
- `mvn dependency:analyze`: Analyzes dependencies and identifies unused or undeclared ones.
- `mvn help:effective-pom`: Displays the fully resolved POM with inherited and managed settings.
- `mvn help:describe -Dplugin=<plugin-prefix> -Dgoal=<goal-name>`: Describes a specific plugin goal.
- `mvn <phase> -DskipTests`: Skips the execution of tests during a lifecycle phase.
- `mvn <goal> -D<property>=<value>`: Sets a property value on the command line.

---

# Key Concepts for Interviews
- **What is Maven and why is it used?**
- **Explain the POM and its key elements.**
- **What is the Maven lifecycle and list some common phases.**
- **What are Maven goals and how do they relate to the lifecycle?**
- **What are Maven plugins and give some examples.**
- **Explain Maven's dependency management, including transitive dependencies and scopes.**
- **What are Maven repositories (local, central, remote)?**
- **How do you add a dependency to a Maven project?**
- **How do you resolve dependency conflicts?** (Nearest wins, `<dependencyManagement>`)
- **How do you build a Maven project?** (Using lifecycle phases or specific goals)
- **How do you skip tests during a Maven build?**
- **How do you manage project properties in Maven?**
- **What is the purpose of the `<build>` section in the POM?**
- **What is the purpose of the `<plugins>` section in the POM?**
- **How do you configure a Maven plugin?**
- **What is the difference between `mvn clean` and `mvn install`?**
- **When would you use the `provided` scope for a dependency?**
- **What is the purpose of `<dependencyManagement>`?**
- **How do you inherit configuration from a parent POM?** (`<parent>` tag)
- **What are Maven profiles and how are they used?** (`<profiles>` tag)

---

# Advanced Topics (Good to be Aware Of)
- **Maven Archetypes**: Templates for creating new Maven projects with a predefined structure.
- **Maven Modules (Multi-module projects)**: Managing larger projects by breaking them down into smaller, related subprojects.
- **Maven Assembly Plugin**: Creating distribution packages (e.g., ZIP files) with dependencies.
- **Maven Shade Plugin**: Packaging dependencies into a single JAR (uber JAR).
- **Maven Failsafe Plugin**: For running integration tests.
- **Dependency Management Strategies**: Version ranges, BOMs (Bill of Materials).
- **Custom Maven Plugins**: Extending Maven's functionality by writing your own plugins.

---

# Key Notes
- Maven is primarily used for Java projects but can be used for other languages as well.
- It promotes convention over configuration.
- It provides a standardized build process.
- It simplifies dependency management.
