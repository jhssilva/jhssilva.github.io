---
layout: page
title: Datadog open source
description: Contributions to Datadog's public symbolication and source map tooling.
img:
importance: 1
category: open-source
---

Public contributions to the tools that upload and process debug symbols for Datadog Error Tracking and RUM.

- **[DataDog/symbolic](https://github.com/DataDog/symbolic)** (Rust, fork of Sentry's Symbolic): minidump processing and CFI-based stack unwinding through the C ABI, plus Windows PE, x86 and macOS dSYM fixes.
- **[DataDog/datadog-ci](https://github.com/DataDog/datadog-ci)** (TypeScript): reduced PE unwind information uploads, ARM64 support, and Debug ID registration fixes for source maps.
- **[DataDog/build-plugins](https://github.com/DataDog/build-plugins)** (TypeScript): retries for transient network errors and buffered compressed uploads.

[See all my pull requests](https://github.com/pulls?q=is%3Apr+author%3Ajhssilva+org%3ADataDog+is%3Amerged)
