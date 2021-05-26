module.exports = {
    outputDir: 'docs',
	publicPath: '/myTodo',
    css: {
        loaderOptions: {
            scss: {
                data: `
                    @import "@/assets/css/common/_base.scss";
                    @import "@/assets/css/common/_variable.scss";
                    @import "@/assets/css/common/_mixin.scss";
                    @import "@/assets/css/common/_form.scss";
                    @import "@/assets/css/common/_icon.scss";
                    @import "@/assets/css/common/_layout.scss";
                `
            }
        }
    },
}