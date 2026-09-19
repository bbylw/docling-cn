<p align="center">
  <a href="https://github.com/docling-project/docling">
    <img loading="lazy" alt="Docling" src="https://github.com/docling-project/docling/raw/main/docs/assets/docling_processing.png" width="100%"/>
  </a>
</p>

# Docling

<p align="center">
  <a href="https://trendshift.io/repositories/17240" target="_blank"><img src="https://trendshift.io/api/badge/repositories/17240" alt="DS4SD%2Fdocling | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

[![arXiv](https://img.shields.io/badge/arXiv-2408.09869-b31b1b.svg)](https://arxiv.org/abs/2408.09869)
[![Docs](https://img.shields.io/badge/docs-live-brightgreen)](https://docling-project.github.io/docling/)
[![PyPI version](https://img.shields.io/pypi/v/docling)](https://pypi.org/project/docling/)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/docling)](https://pypi.org/project/docling/)
[![uv](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/uv/main/assets/badge/v0.json)](https://github.com/astral-sh/uv)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)
[![Pydantic v2](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/pydantic/pydantic/main/docs/badge/v2.json)](https://pydantic.dev)
[![prek](https://img.shields.io/badge/prek-enabled-brightgreen)](https://pypi.org/project/prek/)
[![License MIT](https://img.shields.io/github/license/docling-project/docling)](https://opensource.org/licenses/MIT)
[![PyPI Downloads](https://static.pepy.tech/badge/docling/month)](https://pepy.tech/projects/docling)
[![Docling Actor](https://apify.com/actor-badge?actor=vancura/docling&fpr=docling)](https://apify.com/vancura/docling)
[![Chat with Dosu](https://dosu.dev/dosu-chat-badge.svg)](https://app.dosu.dev/097760a8-135e-4789-8234-90c8837d7f1c/ask?utm_source=github)
[![Discord](https://img.shields.io/discord/1399788921306746971?color=6A7EC2&logo=discord&logoColor=ffffff)](https://docling.ai/discord)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/10101/badge)](https://www.bestpractices.dev/projects/10101)
[![LF AI & Data](https://img.shields.io/badge/LF%20AI%20%26%20Data-003778?logo=linuxfoundation&logoColor=fff&color=0094ff&labelColor=003778)](https://lfaidata.foundation/projects/)

## 什么是 Docling？

Docling 让文档处理变得简单：既能解析多种格式（包括对 PDF 的深度理解），又能与生成式 AI 生态无缝集成。

## 功能特性

- 🗂️ 解析[多种文档格式][supported_formats]：PDF、DOCX、PPTX、XLSX、HTML、EPUB、Apple Pages、WAV、MP3、WebVTT、Box Notes、邮件格式（EML、MSG）、图片（PNG、TIFF、JPEG 等）、LaTeX、DocLang、纯文本等等
- 📑 深度理解 PDF：页面布局、阅读顺序、表格结构、代码、公式、图片分类等
- 🧬 统一且富有表达力的 [DoclingDocument][docling_document] 表示格式
- ↪️ 丰富的[导出格式][supported_formats]与选项：Markdown、HTML、WebVTT、DocLang、[DocTags](https://arxiv.org/abs/2503.11576) 以及无损 JSON
- 📜 支持多种专用 XML schema，包括 [DocLang](https://doclang.ai)、[USPTO](https://www.uspto.gov/patents) 专利、[JATS](https://jats.nlm.nih.gov/) 论文与 [XBRL](https://www.xbrl.org/) 财务报告
- 🔒 支持本地执行，适用于敏感数据与网络隔离环境
- 🤖 开箱即用的[集成][integrations]，包括 LangChain、LlamaIndex、Crew AI 与 Haystack，面向智能体 AI
- 🔍 完善的 OCR 支持，可处理扫描版 PDF 与图片
- 👓 支持多种视觉语言模型（VLM），例如 [GraniteDocling](https://huggingface.co/ibm-granite/granite-docling-258M)
- 🎙️ 通过自动语音识别（ASR）模型支持音频
- 🔌 通过 [MCP server](https://docling-project.github.io/docling/usage/mcp/) 接入任意智能体
- 🌐 通过 [API server](https://docling-project.github.io/docling/usage/api_server/)（docling-serve）把 Docling 作为服务运行
- 💻 简单便捷的命令行工具

### 最新变化

- 🎬 解析视频文件（MP4、AVI、MOV、MKV、WebM），输出 ASR 转写文本与代表性关键帧
- 📄 解析 ODF（OpenDocument Format）文件：文本文档（`.odt`）、电子表格（`.ods`）、演示文稿（`.odp`）
- 💼 解析 XBRL（可扩展商业报告语言）文档，用于财务报告
- 📧 解析邮件文件（`.eml`、`.msg`）
- 📚 解析 EPUB 电子书文件
- 🍎 解析 Apple Pages（`.pages`）文档，兼容两代容器格式（Pages 5+ 与 iWork '09）
- 📝 解析纯文本文件（`.txt`、`.text`）以及 Markdown 超集（`.qmd`、`.Rmd`）
- 📊 图表理解（柱状图、饼图、折线图）：可转换为表格或代码，并补充详细描述

### 即将支持

- 📝 元数据抽取，包括标题、作者、参考文献与语言
- 📝 复杂化学内容理解（分子结构）

## 快速开始

### 1. 安装

```bash
pip install docling
```

> **注意：** 自 docling 2.70.0 起不再支持 Python 3.9，请使用 Python 3.10 或更高版本。

支持 macOS、Linux 与 Windows，x86_64 与 arm64 架构均可运行。

更[详细的安装说明](https://docling-project.github.io/docling/getting_started/installation/)请参阅文档。

## 2. 转换文档（命令行）

```bash
docling https://arxiv.org/pdf/2206.01062
```

该命令会在当前目录生成一个 .md 文件，包含结构化后的文档内容。

你也可以通过 Docling CLI 使用 🥚[GraniteDocling](https://huggingface.co/ibm-granite/granite-docling-258M) 及其他 VLM：

```bash
docling --pipeline vlm --vlm-model granite_docling https://arxiv.org/pdf/2206.01062
```

## 3. Python 用法（推荐）

```python
from docling.document_converter import DocumentConverter

source = "https://arxiv.org/pdf/2408.09869"  # 本地路径或 URL 均可
converter = DocumentConverter()
result = converter.convert(source)
print(result.document.export_to_markdown())  # 输出："## Docling Technical Report[...]"
```

更多进阶[用法](https://docling-project.github.io/docling/usage/)与[配置](https://docling-project.github.io/docling/getting_started/installation/)选项。

## 文档

请查阅 Docling [文档](https://docling-project.github.io/docling/)，了解安装、用法、核心概念、实践示例、扩展等内容。

## 示例

动手试试我们的[示例](https://docling-project.github.io/docling/examples/)，看看如何用 Docling 应对不同的应用场景。

## 集成

为了更快地把 AI 应用落地，可以了解 Docling 与主流框架、工具的原生[集成](https://docling-project.github.io/docling/integrations/)。

## 获取帮助与支持

欢迎通过[讨论区](https://github.com/docling-project/docling/discussions)与我们交流。

## 技术报告

想深入了解 Docling 的内部机制，请阅读 [Docling 技术报告](https://arxiv.org/abs/2408.09869)。

## 参与贡献

请先阅读[《为 Docling 贡献代码》](https://github.com/docling-project/docling/blob/main/CONTRIBUTING.md)。

## 引用

如果你的项目使用了 Docling，请考虑引用以下内容：

```bib
@techreport{Docling,
  author = {Deep Search Team},
  month = {8},
  title = {Docling Technical Report},
  url = {https://arxiv.org/abs/2408.09869},
  eprint = {2408.09869},
  doi = {10.48550/arXiv.2408.09869},
  version = {1.0.0},
  year = {2024}
}
```

## 许可证

Docling 代码库采用 MIT 许可证。
各模型的使用，请遵循其原始包中的模型许可证。

## LF AI & Data

Docling 是 [LF AI & Data 基金会](https://lfaidata.foundation/projects/) 的托管项目。

### IBM ❤️ 开源 AI

本项目由 IBM Research Zurich 的 AI for knowledge 团队发起。

[supported_formats]: https://docling-project.github.io/docling/usage/supported_formats/
[docling_document]: https://docling-project.github.io/docling/concepts/docling_document/
[integrations]: https://docling-project.github.io/docling/integrations/
[extraction]: https://docling-project.github.io/docling/_generated/examples/extraction/
