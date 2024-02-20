# Typescript

TypeScript 的配置可以通过 tsconfig.json 文件进行管理，该文件包含了 TypeScript 编译器的配置选项。在项目的根目录下创建一个名为 tsconfig.json 的文件，并配置相应的选项即可。


```ts
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "lib": ["es2015", "dom"],
  "strictNullChecks": true,
  "noImplicitAny": true,
  "noImplicitThis": true,
  "esModuleInterop": true,
  "allowJs": true
  "checkJs": true
  "baseUrl": "./src",
  "paths": {
    "@/*": ["*", "src/*"]
  },
  "declaration": true,
  "emitDecoratorMetadata": true,
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- "compilerOptions"：编译器选项，用于配置 TypeScript 编译器的行为。
- "target"：指定编译后的 JavaScript 版本。在这里，我们指定为 ES5。
- "module"：指定编译后的模块系统。在这里，我们指定为 CommonJS。
- "strict"：启用所有严格类型检查选项。在这里，我们启用了严格模式。
- "outDir"：指定编译后的 JavaScript 文件输出目录。
- "rootDir"：指定 TypeScript 源文件目录。
- "include"：指定需要编译的文件或文件夹的匹配模式。在这里，我们指定了 src 目录下的所有 TypeScript 文件。
- "exclude"：指定不需要编译的文件或文件夹的匹配模式。在这里，我们排除了 node_modules 目录。
- "lib"：指定 TypeScript 编译器可访问的内置库的列表。默认情况下，编译器会根据目标版本自动选择适当的库。
- "strictNullChecks"：启用严格的空值检查。当启用时，null 和 undefined 只能赋值给对应的类型或 any 类型。
- "noImplicitAny"：禁止隐式的 any 类型。当启用时，所有变量都必须具有明确的类型声明。
- "noImplicitThis"：禁止隐式的 this 类型。当启用时，在非箭头函数中的 this 表达式必须具有明确的类型。
- "esModuleInterop"：启用 esModuleInterop 以允许以默认导入形式导入 CommonJS 模块。
- "allowJs"：允许编译 JavaScript 文件。
- "checkJs"：在 JavaScript 文件中进行类型检查。
- "baseUrl" 和 "paths"：用于配置模块解析的基本路径和路径映射。
- "declaration"：生成声明文件（.d.ts）以供使用者引用。
- "emitDecoratorMetadata"：在装饰器中生成元数据。


## 常见使用技巧

- 优化前

```ts

class Test {
    user: any
    
    getName() {
        try {
            return user.name
        } catch(e) {
            console.log(e)
        }
    }

    getAge() {
        try {
            return user.age
        } catch(e) {
            console.log(e)
        }
    }
}
```

- 优化后

可以利用装饰器进行优化

```ts

function catchError (type: string) {
    return function (target: any,key:string,descriptor:PropertyDescriptor) {
        const fn = descriptor.value;
        try {
            fn()
        } catch(e) {
            console.log(`${type} is error`, e)
        }
    }
}


class Test {
    user: any
    @catchError('getName')
    getName() {
        try {
            return user.name
        } catch(e) {
            console.log(e)
        }
    }
    @catchError('getAge')
    getAge() {
        try {
            return user.age
        } catch(e) {
            console.log(e)
        }
    }
}

```