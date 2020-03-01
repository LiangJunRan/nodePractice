const path = require('path')

/**
 * dirname() 返回 path 的目录名
 */

const path_dirname = path.dirname('/path/example/index.js'); // /path/example

// console.log(path_dirname)

/**
 * extname() 获取路径的扩展名
 */

const path_extname = path.extname('/path/example/index.js'); // .js

// console.log(path_extname)

/**
 * isAbsolute() 是否是绝对路径.  
 */

path.isAbsolute('/path/example/index.js'); // true

// console.log(path.isAbsolute('/path/example/index.js'))  

path.isAbsolute("./01event.js"); // false

// console.log(path.isAbsolute("./01event.js")) 

/**
 * 拼接路径片段,使用平台特定的分隔符作为定界符将所有给定的 path 片段链接在一起,然后生成规范化路径
 */

let path_join = path.join('/path', 'example', './index.js'); // \path\example\index.js

    path_join = path.join('/path', 'example', '..', './index.js'); // \path\index.js

// console.log(path_join)


/**
 * 将路径或路径片段的序列解析为绝对路径
 * 
 * 给定的路径序列从右到左进行处理,每个后续的 path 前置,直到构造出一个绝对路径
 * 如果在最后执行完没有生成绝对路径,则再加上当前工作目录
 * 
 */

let path_resolve = path.resolve('/foo/bar', './baz'); // \foo\bar\baz

    path_resolve = path.resolve('/foo/bar', '/tmp/file'); // \tmp\file  如果第二个参数是 tmp\file 则结果为\foo\bar\tmp\file

    path_resolve = path.resolve('wwwroot', 'static_files/png', '../gif/image.git'); // D:\node\02\wwwroot\static_files\gif\image.git

// console.log(path_resolve)

/**
 * 规范化路径,使用 path.normalize() 规范化给定的 path ,解析 '..' 和 '.' 片段
 */

let path_normalize = path.normalize("/path//example/index.js"); // \path\example\index,js

// console.log(path_normalize)

/**
 * 解析路径
 */

let path_parse = path.parse("/path/example/index");

// {
//     root: '/',
//     dir: '/path/example',
//     base: 'index',
//     ext: '',
//     name: 'index'
// }


    path_parse = path.parse("/path/example/index.js");

// {
//   root: '/',
//   dir: '/path/example',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

// console.log(path_parse)


/**
 * 序列化路径
 */

let path_format = path.format({
    root: '/',
    dir: '/path/example',
    base: 'index.js',
    ext: '.js',
    name: 'index'
})

// console.log(path_format)


/**
 * 获取 from 到 to 的相对路径
 */

let path_relative = path.relative('/path/example/index.js', '/path'); // ..\..

// console.log(path_relative)

