## bilibili-api

The api uses some sort of directed graph structure where each node knows its parents, but not its children (or the other way around).

Each node has a callback function that takes a payload and returns some data.

Getting data from a node means recursively finding its root, calling "get" on the root, and passing the returned data to each children node until it reaches the entry point node.
 
