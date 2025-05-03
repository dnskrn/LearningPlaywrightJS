# Java Collections Framework Interview Cheat Sheet  

## I. Core Interfaces  

### 1. `Collection<E>`  
Represents a group of objects (elements). The root interface.  
- **Basic operations**: `add(E)`, `remove(Object)`, `contains(Object)`, `size()`, `isEmpty()`, `clear()`, `iterator()`.  
- Not ordered (generally), may contain duplicates (depending on implementation).  

### 2. `Set<E>`  
A `Collection` that contains no duplicate elements. Models the mathematical set abstraction.  
- **Implementations**:  
    - **`HashSet<E>`**: Unordered, uses hashing for efficient operations (O(1) average time). Allows one `null` element.  
    - **`LinkedHashSet<E>`**: Ordered (insertion order), maintains a doubly-linked list. Allows one `null` element.  
    - **`TreeSet<E>`**: Sorted (natural ordering or `Comparator`), uses a red-black tree (O(log n)). Does not allow `null` elements.  

### 3. `List<E>`  
An ordered `Collection` (sequence). Allows duplicate elements.  
- **Additional operations**: `get(int index)`, `set(int index, E element)`, `add(int index, E element)`, `remove(int index)`, `listIterator()`.  
- **Implementations**:  
    - **`ArrayList<E>`**: Resizable array, fast for random access (O(1)), slower for insertions/deletions in the middle (O(n)).  
    - **`LinkedList<E>`**: Doubly-linked list, fast for insertions/deletions at the beginning/end (O(1)), slower for random access (O(n)).  
    - **`Vector<E>`**: Synchronized, legacy class, less performant than `ArrayList`.  
    - **`Stack<E>`**: LIFO stack, based on `Vector`. Legacy class, `Deque` is preferred.  

### 4. `Queue<E>`  
Designed for holding elements prior to processing. Typically FIFO.  
- **Basic operations**: `offer(E)`, `poll()`, `peek()`.  
- **Implementations**:  
    - **`LinkedList<E>`**: Implements `Queue` (FIFO).  
    - **`PriorityQueue<E>`**: Orders elements by priority (natural ordering or `Comparator`).  

### 5. `Deque<E>`  
Supports element insertion and removal at both ends.  
- **Operations**: `addFirst(E)`, `addLast(E)`, `removeFirst()`, `removeLast()`, `peekFirst()`, `peekLast()`.  
- **Implementations**:  
    - **`LinkedList<E>`**: Implements `Deque`.  
    - **`ArrayDeque<E>`**: Resizable array, generally faster than `LinkedList`.  

### 6. `Map<K, V>`  
Maps keys to values. Not a subtype of `Collection`.  
- **Basic operations**: `put(K, V)`, `get(Object)`, `remove(Object)`, `containsKey(Object)`, `containsValue(Object)`, `keySet()`, `values()`, `entrySet()`.  
- **Implementations**:  
    - **`HashMap<K, V>`**: Unordered, uses hashing (O(1) average time). Allows one `null` key and multiple `null` values.  
    - **`LinkedHashMap<K, V>`**: Ordered (insertion order or access order).  
    - **`TreeMap<K, V>`**: Sorted by keys (natural ordering or `Comparator`). Does not allow `null` keys.  
    - **`Hashtable<K, V>`**: Synchronized, legacy class. Does not allow `null` keys or values.  

---

## II. Key Concepts and Comparisons  

- **Ordering**:  
    - Unordered: `HashSet`, `HashMap`.  
    - Insertion-ordered: `LinkedHashSet`, `LinkedHashMap`.  
    - Sorted: `TreeSet`, `TreeMap`.  

- **Duplicates**:  
    - `Set`: No duplicates.  
    - `List`: Allows duplicates.  
    - `Map`: No duplicate keys (values can be duplicates).  

- **Null Elements/Keys**:  
    - Allowed: `HashSet`, `LinkedHashSet`, `ArrayList`, `LinkedList`, `HashMap`, `LinkedHashMap`.  
    - Not allowed: `TreeSet`, `PriorityQueue`, `TreeMap`, `Hashtable`, `ArrayDeque`.  

- **Synchronization**:  
    - Synchronized: `Vector`, `Stack`, `Hashtable` (legacy).  
    - Not synchronized: `ArrayList`, `LinkedList`, `HashSet`, `HashMap`, etc.  

- **Performance**:  
    - `HashSet`/`HashMap`: O(1) average time for add/remove/contains.  
    - `TreeSet`/`TreeMap`: O(log n) for add/remove/contains.  
    - `ArrayList`: O(1) for random access, O(n) for insert/delete in the middle.  
    - `LinkedList`: O(1) for insert/delete at beginning/end, O(n) for random access.  

---

## III. Choosing the Right Collection  

- **Unique elements?** -> `Set`  
    - Maintain insertion order? -> `LinkedHashSet`  
    - Sorted? -> `TreeSet`  
- **Sequence with duplicates?** -> `List`  
    - Fast random access? -> `ArrayList`  
    - Fast insertions/deletions at ends? -> `LinkedList`  
- **FIFO processing?** -> `Queue`  
    - Basic FIFO? -> `LinkedList`  
    - Priority-based? -> `PriorityQueue`  
- **Double-ended queue?** -> `Deque`  
    - Array-based? -> `ArrayDeque`  
    - Linked list? -> `LinkedList`  
- **Key-value mapping?** -> `Map`  
    - Fast lookup? -> `HashMap`  
    - Maintain insertion order? -> `LinkedHashMap`  
    - Sorted keys? -> `TreeMap`  

---

## IV. Iterating Over Collections  

- **Iterator**: Generic traversal. Allows safe removal during iteration.  
    ```java
    Iterator<E> iterator = collection.iterator();
    while (iterator.hasNext()) {
            E element = iterator.next();
            if (someCondition) {
                    iterator.remove();
            }
    }
    ```  

- **Enhanced for loop**: Simpler syntax, no removal.  
    ```java
    for (E element : collection) {
            // Process element
    }
    ```  

- **ListIterator**: Bidirectional traversal for `List`.  
    ```java
    ListIterator<E> listIterator = list.listIterator();
    while (listIterator.hasNext()) {
            E element = listIterator.next();
    }
    while (listIterator.hasPrevious()) {
            E element = listIterator.previous();
    }
    ```  

- **Iterating over Maps**:  
    ```java
    for (K key : map.keySet()) {
            V value = map.get(key);
    }
    for (Map.Entry<K, V> entry : map.entrySet()) {
            K key = entry.getKey();
            V value = entry.getValue();
    }
    map.forEach((key, value) -> {
            // Process key-value
    });
    ```  

---

## V. Important Considerations  

- **Time complexities**: Know the performance of operations for each implementation.  
- **Generics**: Use `<E>` or `<K, V>` for type safety.  
- **Immutability**: Use immutable collections when modification is not needed.  
- **Thread Safety**: Use synchronized or concurrent collections in multithreaded environments.  
- **Performance**: Choose based on expected operations and requirements.  

---

## VI. Common Interview Questions  

- Difference between `List`, `Set`, and `Map`.  
- When to use `ArrayList` vs. `LinkedList` vs. `Vector`.  
- How does `HashSet` ensure uniqueness?  
- Difference between `HashMap` and `Hashtable`.  
- Purpose of `Iterator` and how it differs from a for loop.  
- How to sort a `List` or custom objects.  
- How to make a collection thread-safe.  
