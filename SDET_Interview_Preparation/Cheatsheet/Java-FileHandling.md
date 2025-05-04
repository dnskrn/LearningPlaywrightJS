# File Handling in Java: Interview Cheat Sheet

## Core Concepts

### Input Stream
- Reads data from a source (e.g., file, network).  
    *(Abstract class: `InputStream`)*
    - **`FileInputStream`**: Reads bytes from a file.
    - **`BufferedInputStream`**: Adds buffering for efficient reading.

### Output Stream
- Writes data to a destination (e.g., file, network).  
    *(Abstract class: `OutputStream`)*
    - **`FileOutputStream`**: Writes bytes to a file.
    - **`BufferedOutputStream`**: Adds buffering for efficient writing.

### Reader
- Reads character data from a source.  
    *(Abstract class: `Reader`)*
    - **`FileReader`**: Reads characters from a file (uses default encoding).
    - **`BufferedReader`**: Adds buffering for efficient character reading.
    - **`InputStreamReader`**: Reads characters from a byte stream (allows specifying encoding).

### Writer
- Writes character data to a destination.  
    *(Abstract class: `Writer`)*
    - **`FileWriter`**: Writes characters to a file (uses default encoding).
    - **`BufferedWriter`**: Adds buffering for efficient character writing.
    - **`OutputStreamWriter`**: Writes characters to a byte stream (allows specifying encoding).

### File
- Represents a file or directory path. Provides methods for interacting with the file system.

### Path
- Represents a file or directory path (part of NIO.2). Offers more features than `File`.

### Files
- Utility class (part of NIO.2) providing static methods for common file operations.

---

## Common Operations (Legacy IO - `java.io`)

### Creating a File Object
```java
File file = new File("my_file.txt"); // Represents the file path
File dir = new File("my_directory"); // Represents the directory path
```

### Checking File/Directory Existence
```java
boolean exists = file.exists();
boolean isFile = file.isFile();
boolean isDirectory = file.isDirectory();
```

### Creating Directories
```java
boolean created = dir.mkdir(); // Creates a single directory
boolean createdParents = dir.mkdirs(); // Creates directory and any necessary parent directories
```

### Creating Files
```java
try {
        boolean newFile = file.createNewFile(); // Creates a new empty file
} catch (IOException e) {
        e.printStackTrace();
}
```

### Deleting Files/Directories
```java
boolean deleted = file.delete(); // Deletes the file or an empty directory
```

### Reading from a File (Byte Streams)
```java
try (FileInputStream fis = new FileInputStream("data.bin");
         BufferedInputStream bis = new BufferedInputStream(fis)) {
        int byteData;
        while ((byteData = bis.read()) != -1) {
                // Process byteData
        }
} catch (IOException e) {
        e.printStackTrace();
}
```

### Writing to a File (Byte Streams)
```java
try (FileOutputStream fos = new FileOutputStream("output.bin");
         BufferedOutputStream bos = new BufferedOutputStream(fos)) {
        byte[] data = "Hello, bytes!".getBytes();
        bos.write(data);
} catch (IOException e) {
        e.printStackTrace();
}
```

### Reading from a File (Character Streams)
```java
try (FileReader fr = new FileReader("data.txt");
         BufferedReader br = new BufferedReader(fr)) {
        String line;
        while ((line = br.readLine()) != null) {
                // Process line
        }
} catch (IOException e) {
        e.printStackTrace();
}
```

### Writing to a File (Character Streams)
```java
try (FileWriter fw = new FileWriter("output.txt");
         BufferedWriter bw = new BufferedWriter(fw)) {
        bw.write("Hello, characters!");
        bw.newLine();
} catch (IOException e) {
        e.printStackTrace();
}
```

---

## Common Operations (NIO.2 - `java.nio.file`)

### Creating Path Objects
```java
Path filePath = Paths.get("my_file.txt");
Path dirPath = Paths.get("my_directory");
```

### Checking File/Directory Existence (`Files` Class)
```java
boolean exists = Files.exists(filePath);
boolean isRegularFile = Files.isRegularFile(filePath);
boolean isDirectory = Files.isDirectory(dirPath);
```

### Creating Directories (`Files` Class)
```java
try {
        Path createdDir = Files.createDirectory(dirPath); // Creates a single directory
        Path createdDirs = Files.createDirectories(dirPath); // Creates directory and necessary parents
} catch (IOException e) {
        e.printStackTrace();
}
```

### Creating Files (`Files` Class)
```java
try {
        Path newFile = Files.createFile(filePath); // Creates a new empty file
} catch (IOException e) {
        e.printStackTrace();
}
```

### Deleting Files/Directories (`Files` Class)
```java
try {
        Files.delete(filePath); // Deletes the file (throws exception if fails)
        boolean deletedIfExists = Files.deleteIfExists(filePath); // Deletes if exists, no exception if not
} catch (IOException e) {
        e.printStackTrace();
}
```

### Reading All Lines from a File (`Files` Class)
```java
try {
        List<String> lines = Files.readAllLines(filePath); // Uses default encoding
        List<String> linesWithCharset = Files.readAllLines(filePath, StandardCharsets.UTF_8);
        for (String line : lines) {
                // Process line
        }
} catch (IOException e) {
        e.printStackTrace();
}
```

### Writing All Lines to a File (`Files` Class)
```java
try {
        List<String> linesToWrite = Arrays.asList("Line 1", "Line 2");
        Files.write(filePath, linesToWrite); // Creates/overwrites, default encoding
        Files.write(filePath, linesToWrite, StandardCharsets.UTF_8); // Specify encoding
        Files.write(filePath, linesToWrite, StandardCharsets.UTF_8, StandardOpenOption.APPEND); // Append
} catch (IOException e) {
        e.printStackTrace();
}
```

### Copying Files/Directories (`Files` Class)
```java
Path source = Paths.get("source.txt");
Path destination = Paths.get("destination.txt");
try {
        Files.copy(source, destination); // Overwrites if exists
        Files.copy(source, destination, StandardCopyOption.REPLACE_EXISTING); // Explicitly overwrite
} catch (IOException e) {
        e.printStackTrace();
}
```

### Moving/Renaming Files/Directories (`Files` Class)
```java
Path source = Paths.get("old_name.txt");
Path target = Paths.get("new_name.txt");
try {
        Files.move(source, target); // Overwrites if exists
        Files.move(source, target, StandardCopyOption.REPLACE_EXISTING); // Explicitly overwrite
} catch (IOException e) {
        e.printStackTrace();
}
```

### Walking a File Tree (`Files` Class)
```java
Path startDir = Paths.get(".");
try {
        Files.walkFileTree(startDir, new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                        System.out.println("File: " + file);
                        return FileVisitResult.CONTINUE;
                }

                @Override
                public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
                        System.out.println("Directory: " + dir);
                        return FileVisitResult.CONTINUE;
                }

                @Override
                public FileVisitResult visitFileFailed(Path file, IOException exc) throws IOException {
                        System.err.println("Failed to visit file: " + file + " due to " + exc);
                        return FileVisitResult.CONTINUE;
                }
        });
} catch (IOException e) {
        e.printStackTrace();
}
```

---

## Common Interview Questions

- What are the key classes for file handling in Java? (`File`, `InputStream`/`OutputStream`, `Reader`/`Writer`, `Path`, `Files`)
- What is the difference between byte streams and character streams? When would you use each?
- Explain the purpose of buffering in file I/O. Which classes provide buffering?
- What are the advantages of using NIO.2 (`java.nio.file`) over the legacy `java.io` package?
- How do you create, check existence, delete files and directories in Java?
- How do you read and write data to a file in Java using both byte and character streams?
- How do you read all lines of a text file into a `List` in Java?
- How do you write a `List` of strings to a text file in Java?
- How do you copy and move files in Java using NIO.2? What are the options available?
- How do you recursively traverse a directory structure in Java? (`Files.walkFileTree`, `SimpleFileVisitor`)
- How do you handle exceptions during file I/O operations? (`try-catch-finally`, `try-with-resources`)
- What is the `try-with-resources` statement and why is it important for file handling?
- How do you specify the character encoding when reading or writing text files?
- What are the different modes for opening a file (e.g., read-only, write, append)?
- How can you get information about a file (size, last modified time, etc.)? (`File` methods, `BasicFileAttributes`)

---

### Tips
- Highlight your experience with both legacy `java.io` and NIO.2.
- Emphasize best practices for file handling (e.g., closing streams, exception handling).
- Share specific scenarios or challenges you've encountered with file I/O in your projects.
- Demonstrate understanding of file permissions and how they might affect your code.

