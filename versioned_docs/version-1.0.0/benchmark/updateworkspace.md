---
id: update_workspace
title: Update Workspace
sidebar_label: Update Workspace
sidebar_position: 3
---

:::warning
This guide was generated by ChatGPT. All content in this guide was generated by ChatGPT and should not be considered as professional advice or recommendations. Use at your own risk.
:::

Load sample: Update a record, bottleneck is updating one record which is atomic

# Test 1: memory: "128Mi", cpu: "500m", nodes: 1

### Summary:
- Count: 1000
- Total time: 3.36 s
- Slowest: 433.50 ms
- Fastest: 77.27 ms
- Average: 163.04 ms
- Requests/sec: 298.04

### Response time histogram:

| Time (ms) | Count | Percent |
|-----------|-------|---------|
| 77.269  | 1  ||
| 112.892 | 33 |∎∎|
| 148.515 | 558 |∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎|
| 184.137 | 300 |∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎|
| 219.760 | 27 |∎∎|
| 255.383 | 24 |∎∎|
| 291.006 | 6  ||
| 326.629 | 7 |∎|
| 362.252 | 4  ||
| 397.875 | 9 |∎|
| 433.497 | 31 |∎∎|

### Latency distribution:

| Percentile | Latency (ms) |
|------------|--------------|
| 10 % | 130.28 | 
| 25 % | 140.25 | 
| 50 % | 146.51 | 
| 75 % | 164.85 | 
| 90 % | 188.60 | 
| 95 % | 291.41 | 
| 99 % | 432.31 | 

### Status code distribution:
- [OK]   1000 responses 


# Test 2: memory: "256Mi", cpu: "1500m", 1 node

### Summary:
- Count: 1000
- Total: 3.41 s
- Slowest: 321.75 ms
- Fastest: 25.53 ms
- Average: 165.88 ms
- Requests/sec: 293.10

### Response time histogram:

| Time (ms) | Count | Percent |
|-----------|-------|---------|
| 25.534 | 1 | |
| 55.156 | 10 | ∎ |
| 84.778 | 12 | ∎ |
| 114.400 | 10 | ∎ |
| 144.022 | 8 | |
| 173.644 | 687 | ∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ |
| 203.266 | 267 | ∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ |
| 232.888 | 4 | |
| 262.510 | 0 | |
| 292.132 | 0 | |
| 321.754 | 1 | |

### Latency distribution:

| Percentile | Latency (ms) |
|------------|--------------|
| 10 % | 157.86 | 
| 25 % | 162.40 | 
| 50 % | 166.57 | 
| 75 % | 174.15 | 
| 90 % | 181.92 | 
| 95 % | 188.54 | 
| 99 % | 195.13 | 

### Status code distribution:
- [OK]   1000 responses

# Test 3: memory: "128Mi", cpu: "500m", 2 node

### Summary:
- Count: 1000
- Total: 3.24 s
- Slowest: 263.22 ms
- Fastest: 38.91 ms
- Average: 156.55 ms
- Requests/sec: 308.64

### Response time histogram:

| Time (ms) | Count | Percent |
|-----------|-------|---------|
| 38.909 | 1 | |
| 61.341 | 66 | ∎∎∎∎∎∎ |
| 83.772 | 36 | ∎∎∎ |
| 106.203 | 52 | ∎∎∎∎∎ |
| 128.634 | 37 | ∎∎∎ |
| 151.066 | 81 | ∎∎∎∎∎∎∎∎ |
| 173.497 | 429 | ∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ |
| 195.928 | 135 | ∎∎∎∎∎∎∎∎∎∎∎∎∎ |
| 218.360 | 123 | ∎∎∎∎∎∎∎∎∎∎∎ |
| 240.791 | 15 | ∎ |
| 263.222 | 25 | ∎∎ |

### Latency distribution:

| Percentile | Latency (ms) |
|------------|--------------|
| 10% | 76.73 |
| 25% | 148.41 |
| 50% | 162.02 |
| 75% | 184.24 |
| 90% | 200.97 |
| 95% | 208.81 |
| 99% | 256.37 |

### Status code distribution:
- [OK] 1000 responses
