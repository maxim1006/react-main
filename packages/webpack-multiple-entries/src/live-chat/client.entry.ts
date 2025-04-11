// не отрабатыал webpackChunkName потому что в tsconfig был removeComments: true, a надо false
// еще "module": "esnext", должен быть в tsconfig, иначе если commonjs то удалится этот импорт
import(/* webpackChunkName: "live-chat" */ './client.bootstrap');
