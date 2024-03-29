//此文件作为Generator的核心入口文件
//需要导出一个继承自 Yeoman Generator 的类型
//Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
//我们在这些方法中可以通过调用父类提供的一些方法实现一些功能，例如 文件的写入



const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        // Yeoman 在询问用户环节会自动调用此方法
        // 在此方法中 调用父类的 prompt() 方法发出对用户的命令行访问
        return this.prompt([
            {
                type: 'input'
                , name: 'name'
                , message: 'Your project name'
                , default: this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }

    writing() {
        //Yeoman 自动在生成文件阶段调用此方法
        // this.fs.write(
        //     this.destinationPath('temp.txt')
        //     , Math.random().toString()
        // )

        // 通过模板方式写入文件到目标目录


        //模板文件路径
        const tmpl = this.templatePath('bar.html')

        //输入出的目标路径
        const output = this.destinationPath('bat.html')

        //模板数据上下文
        const context = this.answers

        this.fs.copyTpl(tmpl, output, context)
    }
}