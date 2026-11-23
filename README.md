# ZhangYida 的学术手札

基于 [Fuwari](https://github.com/saicaca/fuwari) 和 Astro 构建。

网站：https://ikaros9.github.io/ustbzyd_Academic_Notes/

## 开发与发布

使用 Node.js 24.22.3 和 pnpm 11.25.0。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
```

个人信息与论文：src/data/academic.ts。博客：src/content/posts/。

推送 main 后自动检查、构建并发布到 GitHub Pages，构建包含 Pagefind 搜索索引。Pages 发布来源为 GitHub Actions。

Fuwari 模板许可证见 LICENSE。个人文章、照片和同人素材的权利归相应权利人。
