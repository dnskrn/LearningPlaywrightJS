# Maven Interview Questions and Solutions

## 1. When Should One Use Maven?
Maven is used for managing project builds, dependencies, and documentation in Java-based projects. It is ideal for projects requiring consistent builds, dependency management, and integration with CI/CD pipelines.

## 2. Discuss the Core Concepts of Maven.
- **POM (Project Object Model):** Central configuration file.
- **Dependencies:** Libraries required for the project.
- **Repositories:** Storage for dependencies.
- **Build Lifecycle:** Predefined phases for building projects.
- **Plugins:** Extend Maven functionality.

## 3. How Does Maven Work?
Maven uses the `pom.xml` file to define project configurations, dependencies, and plugins. It downloads dependencies from repositories, executes build phases, and generates outputs like JARs or WARs.

## 4. Differences Between Maven and Ant
| Feature         | Maven                     | Ant                     |
|-----------------|---------------------------|-------------------------|
| Configuration   | Declarative (POM)         | Procedural (XML scripts)|
| Dependency Mgmt | Built-in                  | Manual                  |
| Convention      | Convention over config    | No conventions          |

## 5. Elements for Creating a `pom.xml` File
- `<modelVersion>`
- `<groupId>`
- `<artifactId>`
- `<version>`
- `<dependencies>`

## 6. Types of Maven Repositories
- **Local Repository:** On developer's machine.
- **Central Repository:** Default remote repository.
- **Remote Repository:** Custom repositories.

## 7. Command to Install JAR Files in Local Repository
```bash
mvn install:install-file -Dfile=<path-to-jar> -DgroupId=<group-id> -DartifactId=<artifact-id> -Dversion=<version> -Dpackaging=jar
```

## 8. Clean, Default, and Site Lifecycles
- **Clean:** Cleans the project (`clean` phase).
- **Default:** Builds the project (`compile`, `test`, `package`).
- **Site:** Generates project documentation (`site` phase).

## 9. Phases of the Default Lifecycle
- `validate`, `compile`, `test`, `package`, `verify`, `install`, `deploy`.

## 10. Maven Plugins and Their Types
- **Build Plugins:** Execute during build (e.g., `maven-compiler-plugin`).
- **Reporting Plugins:** Generate reports (e.g., `maven-site-plugin`).

## 11. Convention Over Configuration
Maven uses sensible defaults, reducing the need for explicit configurations.

## 12. Maven's Inheritance Order
Child POM inherits from the parent POM, overriding or merging configurations.

## 13. Snapshot in Maven
A snapshot is a development version of a dependency.

## 14. Maven Dependency Storage Locations
- Local repository (`~/.m2/repository`).
- Remote repositories.

## 15. Maven Build Profiles
- **Types:** Default, user-defined, and active-by-default.
- **Activation:** Command-line, environment variables, or OS settings.

## 16. Referencing a Property in `pom.xml`
```xml
${propertyName}
```

## 17. Generating Javadocs in Maven
```bash
mvn javadoc:javadoc
```

## 18. What is MOJO?
MOJO (Maven Old Java Object) represents a Maven plugin goal.

## 19. Super POM
The default parent POM from which all POMs inherit.

## 20. Dependency Scope
Defines the visibility of dependencies:
- `compile`, `provided`, `runtime`, `test`, `system`, `import`.

## 21. Maven Archetype
A template for creating new projects.
```bash
mvn archetype:generate
```

## 22. Command to Create a Project from Hard Drive
```bash
mvn archetype:generate -DinteractiveMode=false
```

## 23. Phases of the Clean Lifecycle
- `pre-clean`, `clean`, `post-clean`.

## 24. Phases of the Site Lifecycle
- `pre-site`, `site`, `post-site`, `site-deploy`.

## 25. Commonly Used Plugins
- **Clean Plugin:** Cleans target directory.
- **Surefire Plugin:** Runs unit tests.
- **Antrun Plugin:** Executes Ant tasks.

## 26. `settings.xml` File
Defines user-specific configurations like repositories and proxies.

## 27. Dependency Mediation and Management
- **Mediation:** Resolves conflicts between versions.
- **Management:** Centralizes dependency versions.

## 28. System Dependency
Dependencies provided by the JDK or system.

## 29. Optional Dependency
Indicates a dependency is optional for downstream projects.

## 30. Transitive Dependency and Exclusion
- **Transitive Dependency:** Automatically included dependencies.
- **Exclusion:** Prevents unwanted transitive dependencies.

## 31. Elements for External Dependencies
- `<groupId>`, `<artifactId>`, `<version>`.

## 32. User-Defined Properties
Custom properties defined in `pom.xml`.

## 33. Profile Element in `settings.xml`
Activates build profiles based on conditions.

## 34. Maven-Release Plugin
Automates release management (e.g., versioning, tagging).

## 35. Exclusions on Dependency Basis
Prevents unintended exclusions at the global level.

## 36. Default and Advanced Configuration Inheritance
- **Default:** Inherits from parent POM.
- **Advanced:** Customizes inheritance.

## 37. Project Aggregation
Combines multiple modules into a single build.

## 38. Maven Wagon Plugin
Handles file transfers (e.g., uploading artifacts).

## 39. Doxia in Maven
Generates project documentation.

## 40. Running JUnit Tests in Parallel
```bash
mvn surefire:test -Dparallel=classes
```

## 41. Skipping Tests
```bash
mvn install -DskipTests
```

## 42. Maven Package vs Install
- **Package:** Creates JAR/WAR.
- **Install:** Installs artifact in local repository.
