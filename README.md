# AI Dev Toolkit 🧠

简化AI开发的工具包 - 专为中国开发者优化

## 功能特性

- ✅ **模型调用简化** - 一行代码调用主流AI模型
- ✅ **中文优化** - 针对中文场景优化的默认配置  
- ✅ **自动重试** - 网络不稳定时自动重试机制
- ✅ **成本监控** - 实时跟踪API调用成本
- ✅ **本地缓存** - 减少重复调用，节省费用

## 快速开始

```bash
npm install ai-dev-toolkit
```

```javascript
const { AIClient } = require('ai-dev-toolkit');

// 一行代码调用AI
const client = new AIClient('your-api-key');
const result = await client.chat('你好，介绍一下你自己');
console.log(result);
```

## 支持的平台

- 🇨🇳 阿里云通义千问
- 🇨🇳 百度文心一言  
- 🇨🇳 腾讯混元
- 🌍 OpenAI GPT
- 🌍 Anthropic Claude

## 赞助支持

如果您觉得这个工具包有用，请考虑[赞助支持](https://github.com/sponsors/your-username)！
您的赞助将帮助我持续开发更多有用的工具。

---

**Made with ❤️ for Chinese developers**