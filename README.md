# my_vue_template

## 初回のプロジェクト作成

```console
$ vue create my_vue_template
Vue CLI v3.11.0
┌────────────────────────────┐
│  Update available: 3.12.0  │
└────────────────────────────┘

? Please pick a preset:
  default (babel, eslint)
❯ Manually select features

? Please pick a preset: Manually select features
? Check the features needed for your project:
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
❯◯ E2E Testing


? Check the features needed for your project: Babel, Router, Vuex, Linter

? Use history mode for router? (Requires proper server setup for index fallback in production) Yes

? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
❯ ESLint + Prettier


? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit

? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files
  In package.json

? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N)


✨  Creating project in /private/tmp/my_vue_template.
🗃  Initializing git repository...
⚙  Installing CLI plugins. This might take a while...

⸨ ░░░░░░░░░░░░░░░░░⸩ ⠸ fetchMetadata: sill pacote range manifest for brace-expansion@^1.1.7 fetched in 65ms

......

⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project my_vue_template.
👉  Get started with the following commands:

 $ cd my_vue_template
 $ npm run serve

$
```


## フォーマッタの設定

./.eslintrc.js を下記の通りに。

```console:./.eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier",'plugin:prettier/recommended',],
  plugins: ['vue'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'prettier/prettier': [
      'error',
      {
        semi:false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
```

これでコマンドからは、トップディレクトリで

$ ./node_modules/.bin/eslint --fix ./src/views/*.vue
$ ./node_modules/.bin/eslint --fix ./src/*.js

などとやれば、セミコロンナシのシングルクォートにフォーマットされるぽい。
VSCode上からは、とりあえず下記の機能拡張を入れてみた。

- ESLint
- Prettier - Code formatter
- Vetur
- Japanese Language Pack for Visual Studio Code

んで、設定ファイルはこんな感じで。

$ cat ~/Library/Application\ Support/Code/User/settings.json
{
    "editor.renderControlCharacters": true,
    "editor.fontSize": 14,
    "workbench.colorTheme": "Visual Studio Dark",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    "editor.minimap.enabled": false,
    "prettier.singleQuote": true,
    "prettier.semi": false,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
      {
        "language": "vue",
        "autoFix": true
      }
    ],

    "vetur.format.defaultFormatter.js": "none",
}

参考: https://qiita.com/fukasawah/items/cfff8957f3956850dc7e


これで、*.vueファイル群は保存時に自動にESLintでフォーマットされ(シングルクォート、セミコロンナシ)。
*.jsファイル群は、cmd shift F で手動フォーマットして運用出来そう。




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
