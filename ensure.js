/**
 * 确保obj上有name方法
 * 用ensure当方法名，立马高端了有木有
 */
function ensure(obj, name, factory) {
    return obj[name] || (obj[name] = factory());
}
