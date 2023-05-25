Garbage Collection:
This is a process in JavaScript where memory management is automatically performed. Unneeded data is
identified by the JavaScript engine and cleared up to free memory space.

*Reachability: The central concept in JavaScript's memory management is reachability. Values are reachable if they are
accessible or usable in some way, meaning they are stored in memory. Reachable values originate from roots, which
include currently executing functions, their local variables and parameters, other functions on the current chain of
nested calls, and global variables.

*References: Any other value is considered reachable if it's reachable from a root by a reference or by a chain of
references. If there are no references to an object, it becomes unreachable and is removed from memory by the garbage
collector.

*Interlinked Objects: These are objects that are linked to each other through references. When the entire chain of
references to an object or group of objects is deleted, the objects become unreachable and are cleared from memory.

**Mark-and-Sweep Algorithm**: This is the basic garbage collection algorithm. It starts from roots and marks them. It
then
marks all objects referenced from the roots and continues the process until all reachable references are visited. All
objects except the marked ones are removed.

**Garbage Collection Optimizations**: JavaScript engines use several optimizations to improve garbage collection speed
and
minimize code execution delays. These include :

*Generational Collection (splitting objects into "new" and "old" sets),
*Incremental Collection (splitting objects into multiple parts and clearing these parts one after another), and
*Idle-time Collection (running the garbage collector only when the CPU is idle).

Unreachable Island: This is a situation where a group of interlinked objects becomes unreachable as a whole and is
removed from memory.

V8 JavaScript Engine: It's one of the engines implementing these memory management concepts and techniques. It is often
discussed due to its extensive online documentation. The specifics of garbage collection can differ across different
engines.

Low-level Optimizations: Advanced knowledge of engine internals can be useful when trying to perform low-level
optimizations. It's recommended to learn the language thoroughly before delving into this area.