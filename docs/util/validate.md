# 实用的校验工具

## 电话号码
```ts
/**
 * isPhone?
 * @param {any} phone
 * @returns {Boolean}
 */
export const isPhone: (phone: any) => boolean = (phone) =>
  /^(0|86|17951)?(13\d|15[0-35-9]|18\d|14[57]|17[6-8])\d{8}$/.test(phone)
```

## 邮箱
```ts
/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email: string): boolean {
  const reg =
    /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/
  return reg.test(email)
}
```

## 邮编
```ts
/**
 * isPostcode?
 * @desc 河北邮箱包含 0
 * @param {any} postcode
 * @returns {Boolean}
 */
export const isPostcode: (postcode: any) => boolean = (postcode) =>
    /^\d{6}$/g.test(postcode)
```

## 座机号码
```ts
/**
 * isTel?
 * @param {any} tel
 * @returns {Boolean}
 */
export const isTelPhone: (tel: any) => boolean = (tel) =>
    /^(\d{3,4}-)?\d{7,8}$/.test(tel)
```

## 数组？
```ts
/**
 * isArray?
 * @param {any} arg
 * @returns {Boolean}
 */
export function isArray(arg: any): boolean {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
```

## 字符串？
```ts
/**
 * isString?
 * @param {any} str
 * @returns {Boolean}
 */
export function isString(str: any): boolean {
  return typeof str === 'string' || str instanceof String
}
```

## 大小写
```ts
/**
 * isLower?
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str: string): boolean {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * isUpper?
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str: string): boolean {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}
```
## 网络地址
```ts
/**
 * isUrl?
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url: string): boolean {
  const reg =
    /^(https?|ftp):\/\/([\d.A-Za-z-]+(:[\d$%&.A-Za-z-]+)*@)*((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d?)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}|([\dA-Za-z-]+\.)*[\dA-Za-z-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[A-Za-z]{2}))(:\d+)*(\/($|[\w#$%&'+,.=?\\~-]+))*$/
  return reg.test(url)
}
```

## 密码验证
```ts
/**
 * isPassword
 * @desc 8-16且必须包含大小写、数字、特殊符号
 * @param password
 */
export const isPassword: (password: any) => boolean = (password) => {
  const reg =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&*,.@^])[\d!#$%&*,.@A-Z^a-z]{8,16}$/
  return reg.test(password)
}
```
