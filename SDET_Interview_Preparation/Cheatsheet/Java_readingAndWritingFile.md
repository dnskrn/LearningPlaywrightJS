# File Handling in Java

## I. Excel Files (.xlsx, .xls) - Apache POI Library

### Dependency (pom.xml for Maven)
```xml
<dependency>
    <groupId>org.apache.poi</groupId>
    <artifactId>poi-ooxml</artifactId>
    <version>5.2.3</version>
</dependency>
```

### Reading from Excel (.xlsx)
```java
try (FileInputStream fis = new FileInputStream("data.xlsx");
     XSSFWorkbook workbook = new XSSFWorkbook(fis)) {

    XSSFSheet sheet = workbook.getSheetAt(0); // Get the first sheet
    Iterator<Row> rowIterator = sheet.iterator();

    while (rowIterator.hasNext()) {
        Row row = rowIterator.next();
        Iterator<Cell> cellIterator = row.cellIterator();

        while (cellIterator.hasNext()) {
            Cell cell = cellIterator.next();
            switch (cell.getCellType()) {
                case STRING:
                    System.out.print(cell.getStringCellValue() + "\t");
                    break;
                case NUMERIC:
                    if (DateUtil.isCellDateFormatted(cell)) {
                        System.out.print(cell.getDateCellValue() + "\t");
                    } else {
                        System.out.print(cell.getNumericCellValue() + "\t");
                    }
                    break;
                case BOOLEAN:
                    System.out.print(cell.getBooleanCellValue() + "\t");
                    break;
                case BLANK:
                    System.out.print("\t");
                    break;
                default:
                    System.out.print("\t");
            }
        }
        System.out.println();
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### Writing to Excel (.xlsx)
```java
try (XSSFWorkbook workbook = new XSSFWorkbook();
     FileOutputStream fos = new FileOutputStream("output.xlsx")) {

    XSSFSheet sheet = workbook.createSheet("Sheet1");
    Row headerRow = sheet.createRow(0);
    headerRow.createCell(0).setCellValue("Name");
    headerRow.createCell(1).setCellValue("Age");

    Row dataRow1 = sheet.createRow(1);
    dataRow1.createCell(0).setCellValue("Alice");
    dataRow1.createCell(1).setCellValue(30);

    Row dataRow2 = sheet.createRow(2);
    dataRow2.createCell(0).setCellValue("Bob");
    dataRow2.createCell(1).setCellValue(25);

    workbook.write(fos);
} catch (IOException e) {
    e.printStackTrace();
}
```

---

## II. CSV Files (.csv) - Built-in Java or Apache Commons CSV

### Reading from CSV (Built-in)
```java
try (BufferedReader br = new BufferedReader(new FileReader("data.csv"))) {
    String line;
    while ((line = br.readLine()) != null) {
        String[] fields = line.split(",");
        for (String field : fields) {
            System.out.print(field.trim() + "\t");
        }
        System.out.println();
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### Writing to CSV (Built-in)
```java
try (BufferedWriter bw = new BufferedWriter(new FileWriter("output.csv"))) {
    String[] header = {"Name", "Age"};
    bw.write(String.join(",", header));
    bw.newLine();

    String[] data1 = {"Alice", "30"};
    bw.write(String.join(",", data1));
    bw.newLine();

    String[] data2 = {"Bob", "25"};
    bw.write(String.join(",", data2));
    bw.newLine();
} catch (IOException e) {
    e.printStackTrace();
}
```

### Dependency (pom.xml for Maven - Apache Commons CSV)
```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-csv</artifactId>
    <version>1.10.0</version>
</dependency>
```

### Reading from CSV (Apache Commons CSV)
```java
try (Reader in = new FileReader("data.csv");
     CSVParser parser = new CSVParser(in, CSVFormat.DEFAULT.withHeader())) {
    for (CSVRecord record : parser) {
        String name = record.get("Name");
        String age = record.get("Age");
        System.out.println("Name: " + name + ", Age: " + age);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### Writing to CSV (Apache Commons CSV)
```java
try (FileWriter out = new FileWriter("output.csv");
     CSVPrinter printer = new CSVPrinter(out, CSVFormat.DEFAULT.withHeader("Name", "Age"))) {
    printer.printRecord("Alice", "30");
    printer.printRecord("Bob", "25");
} catch (IOException e) {
    e.printStackTrace();
}
```

---

## III. JSON Files (.json) - Jackson Library

### Dependency (pom.xml for Maven - Jackson)
```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.16.1</version>
</dependency>
```

### Reading from JSON
```java
ObjectMapper objectMapper = new ObjectMapper();
try {
    MyJsonObject data = objectMapper.readValue(new File("data.json"), MyJsonObject.class);
    System.out.println("Name: " + data.getName());
    System.out.println("Age: " + data.getAge());
} catch (IOException e) {
    e.printStackTrace();
}
```

### Writing to JSON
```java
ObjectMapper objectMapper = new ObjectMapper();
MyJsonObject dataToWrite = new MyJsonObject();
dataToWrite.setName("Charlie");
dataToWrite.setAge(35);

try {
    objectMapper.writeValue(new File("output.json"), dataToWrite);
} catch (IOException e) {
    e.printStackTrace();
}
```

---

## IV. XML Files (.xml) - JAXB or Jackson XML

### Dependency (pom.xml for Maven - JAXB)
```xml
<dependency>
    <groupId>jakarta.xml.bind</groupId>
    <artifactId>jakarta.xml.bind-api</artifactId>
    <version>4.0.1</version>
</dependency>
<dependency>
    <groupId>org.glassfish.jaxb</groupId>
    <artifactId>jaxb-runtime</artifactId>
    <version>4.0.3</version>
    <scope>runtime</scope>
</dependency>
```

### Reading from XML (JAXB)
```java
try {
    File file = new File("data.xml");
    JAXBContext jaxbContext = JAXBContext.newInstance(MyXmlObject.class);
    Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
    MyXmlObject data = (MyXmlObject) jaxbUnmarshaller.unmarshal(file);
    System.out.println("Name: " + data.getName());
    System.out.println("Age: " + data.getAge());
} catch (JAXBException e) {
    e.printStackTrace();
}
```

### Writing to XML (JAXB)
```java
try {
    MyXmlObject dataToWrite = new MyXmlObject();
    dataToWrite.setName("David");
    dataToWrite.setAge(40);

    File file = new File("output.xml");
    JAXBContext jaxbContext = JAXBContext.newInstance(MyXmlObject.class);
    Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

    jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true); // Pretty print
    jaxbMarshaller.marshal(dataToWrite, file);
} catch (JAXBException e) {
    e.printStackTrace();
}
```

---

## Common Interview Questions
- How do you read and write Excel files in Java? What libraries are commonly used?
- Explain the process of reading data from an Excel sheet using Apache POI.
- How do you handle different data types (string, numeric, date, boolean) when reading from Excel?
- How do you read and write CSV files in Java? What are the built-in options and external libraries?
- What are the advantages of using Apache Commons CSV over built-in Java for CSV handling?
- How do you read and write JSON files in Java? What are the popular libraries?
- Explain how to map JSON data to Java objects and vice versa using Jackson.
- How do you handle nested JSON structures in Java using Jackson?
- How do you handle exceptions that might occur during file reading and writing operations?
- What are some best practices for file handling in Java, especially when dealing with different file formats?
