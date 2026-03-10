/**
 * AI Dev Toolkit - 简化AI开发
 * 专为中国开发者优化的AI工具包
 */

class AIClient {
  constructor(apiKey, options = {}) {
    this.apiKey = apiKey;
    this.options = {
      model: 'qwen-max',
      timeout: 30000,
      retries: 3,
      ...options
    };
    this.cache = new Map();
  }

  async chat(prompt, context = {}) {
    const cacheKey = `${prompt}_${JSON.stringify(context)}`;
    
    // 检查缓存
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // 调用AI模型
    let result;
    for (let i = 0; i < this.options.retries; i++) {
      try {
        result = await this._callModel(prompt, context);
        break;
      } catch (error) {
        if (i === this.options.retries - 1) {
          throw error;
        }
        // 等待后重试
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }

    // 缓存结果
    this.cache.set(cacheKey, result);
    return result;
  }

  async _callModel(prompt, context) {
    // 这里集成具体的AI API调用
    // 支持阿里云、百度、腾讯、OpenAI等
    console.log('Calling AI model with prompt:', prompt);
    return `AI response to: ${prompt}`;
  }

  // 成本监控
  getCostEstimate(tokens) {
    return tokens * 0.0001; // 示例计算
  }
}

// 导出主要类
module.exports = { AIClient };

// 全局实例（可选）
module.exports.createClient = (apiKey, options) => {
  return new AIClient(apiKey, options);
};
