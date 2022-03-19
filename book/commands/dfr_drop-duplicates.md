---
title: dfr drop-duplicates
layout: command
version: 0.59.1
usage: |
  Drops duplicate values in dataframe
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> dfr drop-duplicates (subset) --maintain```

## Parameters

 -  `subset`: subset of columns to drop duplicates
 -  `--maintain`: maintain order

## Examples

drop duplicates
```shell
> [[a b]; [1 2] [3 4] [1 2]] | dfr to-df | dfr drop-duplicates
```