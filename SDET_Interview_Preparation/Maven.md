# Maven Interview Questions and Answers

## 1. What is Maven?
Maven is a project management tool based on POM (Project Object Model). It helps manage builds, documentation, reporting, dependencies, SCMs, and releases.

---

## 2. What aspects are managed by Maven?
- Builds
- Documentation
- Reporting
- SCMs
- Releases

---

## 3. What are the advantages of Maven?
- No need to add JAR files in each project.
- Creates the right directory structure.
- Builds and deploys the project.

---

## 4. What is the command to check the Maven version?
Run the following command:
```bash
mvn -version
```

---

## 5. What does the build tool do?
- Generates source code (if auto-generated code is used).
- Generates documentation from source code.
- Compiles source code.
- Packages compiled code into a JAR or ZIP file.
- Installs the packaged code in the local, server, or central repository.

---

## 6. What is the difference between Ant and Maven?

| **Ant**                     | **Maven**                              |
|-----------------------------|----------------------------------------|
| It is a toolbox.            | It is a framework.                    |
| Mainly a build tool.        | Mainly a project management tool.     |
| No lifecycle.               | Has a lifecycle.                      |
| No formal conventions.      | Has conventions for code placement.   |
| Procedural.                 | Declarative.                          |
| Scripts are not reusable.   | Plugins are reusable.                 |

---

## 7. Why is the use of profiles required in Maven?
Profiles provide flexibility to projects by allowing different configurations.

---

## 8. What is the syntax for offline project creation?
```bash
mvn -o package
```

---

## 9. How is the propagation of plugins to child POMs stopped?
Set `<inherited>` to `false`.

---

## 10. What is the use of the exclusion element?
The `<exclusion>` element is used to exclude dependencies.

---

## 11. Define SNAPSHOT in terms of Maven.
A SNAPSHOT indicates the current development copy.

---

## 12. Define Archetype.
An Archetype is a Maven plugin designed for creating project structures.

---

## 13. What does the central repository consist of?
It consists of a large number of frequently used libraries.

---

## 14. Give the command for installing a JAR file in a local repository.
```bash
mvn install
```

---

## 15. Mention the phases of the cleaning lifecycle.
- `pre-clean`
- `clean`
- `post-clean`

---

## 16. What is the purpose of the `mvn clean` command?
The command removes the `target` directory before starting the build process.

---

## 17. What is a MOJO?
MOJO stands for Maven Plain Old Java Object. Each MOJO is an executable goal in Maven, and a plugin is a distribution of one or more related MOJOs.

---

## 18. What is a repository?
A repository is a directory where all JARs and `pom.xml` files are stored. Types:
- Local Repository
- Central Repository
- Remote Repository

---

## 19. What is a local repository?
The Maven local repository is created on your system when you run any Maven command.

---

## 20. What is a central repository?
The Maven community maintains the central repository on the web.

---

## 21. What is a remote repository?
A remote repository is hosted on the web by different vendors. Dependencies must be defined manually in the `pom.xml` file.

---

## 22. What is POM?
POM stands for Project Object Model. The `pom.xml` file contains project information and configuration.

---

## 23. What are the build phases in Maven?
- `validate`
- `compile`
- `test`
- `package`
- `integration-test`
- `verify`
- `install`
- `deploy`

---

## 24. What is the command to package a Maven project?
```bash
mvn package
```

---

## 25. What is the fully qualified artifact name of a Maven project?
```text
<groupId>:<artifactId>:<version>
```

---

## 26. What is an archetype?
An archetype is a Maven plugin that creates the project structure.

---

## 27. How does Maven manage dependencies and transitive dependencies?
Maven uses the `pom.xml` file to manage dependencies and transitive dependencies. It resolves conflicts using the "nearest definition" strategy.

---

## 28. How to install Maven on a Linux machine?
Refer to the official documentation for installation steps.

---

## 29. What is a SNAPSHOT version?
A SNAPSHOT version represents the latest development code. It is unstable and changes frequently.

---

## 30. What are the dependency scopes in Maven?
- **Compile**: Default scope, available in the classpath.
- **Provided**: Provided by JDK or server at runtime.
- **Runtime**: Needed during execution but not for compilation.
- **Test**: Available only for test compilation and execution.
- **System**: Requires a system path.
- **Import**: Replaces dependencies with those in the specified POM.

---

## 31. What are the two settings files in Maven and their locations?
- Global: `$M2_HOME/conf/settings.xml`
- User-specific: `${user.home}/.m2/settings.xml`

---

## 32. What is the default location for the local repository?
```text
~/.m2/repository
```

---

## 33. What is the default scope in Maven?
The default scope is `compile`.

---

## 34. How do you create documentation in Maven?
Use the following command:
```bash
mvn archetype:generate \
    -DarchetypeGroupId=org.apache.maven.archetypes \
    -DarchetypeArtifactId=maven-archetype-site \
    -DgroupId=com.mycompany.app \
    -DartifactId=my-app-site
```

---

## 35. What is the purpose of the `maven-surefire-plugin`?
It is used for executing unit tests.

---

## 36. How do you handle dependency conflicts in Maven?
Use the `<exclusions>` element or the `<dependencyManagement>` section to specify preferred versions.

---

## 37. How do you generate a Maven project's site documentation?
Run:
```bash
mvn site
```

---

## 38. How do you deploy a Maven project to a remote repository?
Run:
```bash
mvn deploy
```
Ensure the `settings.xml` file contains the necessary credentials.

---

## 39. What is the difference between a dependency and a plugin?
- **Dependency**: A JAR file added to the classpath.
- **Plugin**: A JAR file that executes tasks.

---

## 40. What is the difference between `groupId` and `artifactId`?
- **groupId**: Uniquely identifies the project (e.g., `org.apache.maven`).
- **artifactId**: Name of the JAR without version (e.g., `maven`).

---

## Cheatsheet
- **Offline Build**: Use `mvn -o`.
- **Skip Tests**: Use `-DskipTests`.
- **Multi-module Projects**: Use a parent POM to manage submodules.
- **Snapshot Releases**: Use `-SNAPSHOT` for development versions.
