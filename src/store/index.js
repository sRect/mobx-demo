import homeStore from '@/pages/Home/store';
import aboutStore from '@/pages/About/store';

// https://blog.csdn.net/weixin_42577208/article/details/107332537
// Object.assign有时无法拷贝某些属性的get和set用这个方法
const merge = (target, source) => Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));

// const store = Object.assign(homeStore, aboutStore, {});
const store = merge(homeStore, aboutStore);

export default store;